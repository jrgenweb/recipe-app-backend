import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateRecipeDto } from "./dto/create-recipe.dto";
import { UpdateRecipeDto } from "./dto/update-recipe.dto";

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateRecipeDto) {
    const { categoryIds, steps, ingredients, imageUrls, ...data } = dto;
    const recipe = await this.prisma.recipe.create({
      data: {
        ...data,
        userId,
        recipeCategories: categoryIds?.length
          ? { create: categoryIds.map((categoryId) => ({ categoryId })) }
          : undefined,
        recipeSteps: steps?.length
          ? {
              create: steps.map((s) => ({
                name: s.name,
                description: s.description,
                stepOrder: s.stepOrder,
              })),
            }
          : undefined,
        recipeIngredients: ingredients?.length
          ? {
              create: ingredients.map((i) => ({
                ingredientId: i.ingredientId,
                quantity: i.quantity,
              })),
            }
          : undefined,
        recipeImages: imageUrls?.length
          ? { create: imageUrls.map((url) => ({ url })) }
          : undefined,
      },
      include: {
        user: { select: { id: true, name: true, email: true } },
        recipeCategories: { include: { category: true } },
        recipeSteps: { orderBy: { stepOrder: "asc" } },
        recipeIngredients: { include: { ingredient: true } },
        recipeImages: true,
        _count: { select: { comments: true, ratings: true } },
      },
    });
    return recipe;
  }

  async findAll(
    skip = 0,
    take = 20,
    categoryId?: string,
    cuisineId?: string,
    ingredientIds?: string[],
    search?: string,
  ) {
    const where: Record<string, unknown> = {};
    if (cuisineId) {
      where.cuisineId = cuisineId;
    }
    if (categoryId) {
      where.recipeCategories = { some: { categoryId } };
    }
    if (ingredientIds && ingredientIds.length > 0) {
      where.AND = ingredientIds.map((id) => ({
        recipeIngredients: { some: { ingredientId: id } },
      }));
    }

    if (search) {
      where.OR = [
        { name: { contains: search } },
        { description: { contains: search } },
      ];
    }
    const [data, total] = await Promise.all([
      this.prisma.recipe.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: "desc" },
        include: {
          user: { select: { id: true, name: true, picture: true } },
          recipeCategories: { include: { category: true } },
          recipeImages: { take: 1 },
          _count: { select: { ratings: true, comments: true } },
        },
      }),
      this.prisma.recipe.count({ where }),
    ]);
    return { data, total };
  }

  async findOne(id: string) {
    const recipe = await this.prisma.recipe.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true, picture: true } },
        cuisine: { select: { id: true, name: true } },
        recipeCategories: { include: { category: true } },
        recipeSteps: { orderBy: { stepOrder: "asc" } },
        recipeIngredients: { include: { ingredient: true } },
        recipeImages: true,
        _count: { select: { comments: true, favorites: true, ratings: true } },
      },
    });
    if (!recipe) throw new NotFoundException("Recept nem található");
    return recipe;
  }

  async update(id: string, userId: string, dto: UpdateRecipeDto) {
    const recipe = await this.prisma.recipe.findUnique({ where: { id } });
    if (!recipe) throw new NotFoundException("Recept nem található");
    if (recipe.userId !== userId)
      throw new ForbiddenException("Nincs jogosultságod");

    const { categoryIds, steps, ingredients, imageUrls, ...data } = dto;

    if (categoryIds !== undefined) {
      await this.prisma.recipeCategory.deleteMany({ where: { recipeId: id } });
      if (categoryIds.length) {
        await this.prisma.recipeCategory.createMany({
          data: categoryIds.map((categoryId) => ({ recipeId: id, categoryId })),
        });
      }
    }
    if (steps !== undefined) {
      await this.prisma.recipeStep.deleteMany({ where: { recipeId: id } });
      if (steps.length) {
        await this.prisma.recipeStep.createMany({
          data: steps.map((s) => ({
            recipeId: id,
            name: s.name,
            description: s.description,
            stepOrder: s.stepOrder,
          })),
        });
      }
    }
    if (ingredients !== undefined) {
      await this.prisma.recipeIngredient.deleteMany({
        where: { recipeId: id },
      });
      if (ingredients.length) {
        await this.prisma.recipeIngredient.createMany({
          data: ingredients.map((i) => ({
            recipeId: id,
            ingredientId: i.ingredientId,
            quantity: i.quantity,
          })),
        });
      }
    }
    if (imageUrls !== undefined) {
      await this.prisma.recipeImage.deleteMany({ where: { recipeId: id } });
      if (imageUrls.length) {
        await this.prisma.recipeImage.createMany({
          data: imageUrls.map((url) => ({ recipeId: id, url })),
        });
      }
    }

    return this.prisma.recipe.update({
      where: { id },
      data,
      include: {
        user: { select: { id: true, name: true } },
        recipeCategories: { include: { category: true } },
        recipeSteps: { orderBy: { stepOrder: "asc" } },
        recipeIngredients: { include: { ingredient: true } },
        recipeImages: true,
      },
    });
  }

  async remove(id: string, userId: string) {
    const recipe = await this.prisma.recipe.findUnique({ where: { id } });
    if (!recipe) throw new NotFoundException("Recept nem található");
    if (recipe.userId !== userId)
      throw new ForbiddenException("Nincs jogosultságod");
    await this.prisma.recipe.delete({ where: { id } });
    return { deleted: true };
  }

  async findByUser2(userId: string, skip = 0, take = 20) {
    const [data, total] = await Promise.all([
      this.prisma.recipe.findMany({
        where: { userId },
        skip,
        take,
        orderBy: { createdAt: "desc" },
        include: {
          recipeCategories: { include: { category: true } },
          recipeImages: { take: 1 },
        },
      }),
      this.prisma.recipe.count({ where: { userId } }),
    ]);
    return { data, total };
  }

  async findByUser(
    userId: string,
    skip = 0,
    take = 20,
    categoryId?: string,
    cuisineId?: string,
    search?: string,
  ) {
    const where: Record<string, unknown> = {
      userId,
    };
    if (cuisineId) {
      where.cuisineId = cuisineId;
    }
    if (categoryId) {
      where.recipeCategories = { some: { categoryId } };
    }
    if (search) {
      where.OR = [
        { name: { contains: search } },
        { description: { contains: search } },
      ];
    }
    const [data, total] = await Promise.all([
      this.prisma.recipe.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: "desc" },
        include: {
          user: { select: { id: true, name: true } },
          recipeCategories: { include: { category: true } },
          recipeImages: { take: 1 },
          _count: { select: { ratings: true, comments: true } },
        },
      }),
      this.prisma.recipe.count({ where }),
    ]);
    return { data, total };
  }

  /** ADMIN */
  async adminRemove(id: string) {
    const recipe = await this.prisma.recipe.findUnique({ where: { id } });
    if (!recipe) throw new NotFoundException("Recept nem található");

    await this.prisma.recipe.delete({ where: { id } });
    return { deleted: true };
  }
}
