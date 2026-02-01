import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class RecipeImagesService {
  constructor(private prisma: PrismaService) {}

  async add(recipeId: string, userId: string, url: string) {
    const recipe = await this.prisma.recipe.findUnique({
      where: { id: recipeId },
    });
    if (!recipe) throw new NotFoundException("Recept nem található");
    if (recipe.userId !== userId)
      throw new ForbiddenException("Nincs jogosultságod");
    return this.prisma.recipeImage.create({
      data: { recipeId, url },
    });
  }

  async remove(id: string, userId: string) {
    const img = await this.prisma.recipeImage.findUnique({
      where: { id },
      include: { recipe: true },
    });
    if (!img) throw new NotFoundException("Kép nem található");
    if (img.recipe.userId !== userId)
      throw new ForbiddenException("Nincs jogosultságod");
    await this.prisma.recipeImage.delete({ where: { id } });
    return { deleted: true };
  }

  async findByRecipe(recipeId: string) {
    return this.prisma.recipeImage.findMany({
      where: { recipeId },
      orderBy: { createdAt: "asc" },
    });
  }
}
