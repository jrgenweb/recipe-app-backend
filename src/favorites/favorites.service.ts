import {
  Injectable,
  NotFoundException,
  ConflictException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) {}

  async add(userId: string, recipeId: string) {
    const recipe = await this.prisma.recipe.findUnique({
      where: { id: recipeId },
    });
    if (!recipe) throw new NotFoundException("Recept nem található");
    const existing = await this.prisma.favorite.findUnique({
      where: { recipeId_userId: { recipeId, userId } },
    });
    if (existing) throw new ConflictException("Már a kedvencek között van");
    return this.prisma.favorite.create({
      data: { userId, recipeId },
      include: { recipe: { include: { recipeImages: { take: 1 } } } },
    });
  }

  async remove(userId: string, recipeId: string) {
    const fav = await this.prisma.favorite.findUnique({
      where: { recipeId_userId: { recipeId, userId } },
    });
    if (!fav) throw new NotFoundException("Kedvenc nem található");
    await this.prisma.favorite.delete({
      where: { recipeId_userId: { recipeId, userId } },
    });
    return { deleted: true };
  }

  async findByUser(userId: string, skip = 0, take = 20) {
    const [data, total] = await Promise.all([
      this.prisma.favorite.findMany({
        where: { userId },
        skip,
        take,
        orderBy: { createdAt: "desc" },
        include: {
          recipe: {
            include: {
              user: { select: { id: true, name: true } },
              recipeCategories: { include: { category: true } },
              recipeImages: { take: 1 },
            },
          },
        },
      }),
      this.prisma.favorite.count({ where: { userId } }),
    ]);
    return { data, total };
  }

  async isFavorite(userId: string, recipeId: string) {
    const fav = await this.prisma.favorite.findUnique({
      where: { recipeId_userId: { recipeId, userId } },
    });
    return { isFavorite: !!fav };
  }
}
