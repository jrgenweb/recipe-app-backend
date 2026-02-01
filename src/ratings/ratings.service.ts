import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class RatingsService {
  constructor(private prisma: PrismaService) {}
  /*
  async setRating(userId: string, recipeId: string, rate: number) {
    if (rate < 1 || rate > 5) {
      throw new BadRequestException("Az értékelés 1 és 5 között kell legyen");
    }
    const recipe = await this.prisma.recipe.findUnique({
      where: { id: recipeId },
    });
    if (!recipe) throw new NotFoundException("Recept nem található");
    return this.prisma.rating.upsert({
      where: { userId_recipeId: { userId, recipeId } },
      create: { userId, recipeId, rate },
      update: { rate },
      include: { recipe: { select: { id: true, name: true } } },
    });
  }*/

  async setRating(userId: string, recipeId: string, rate: number) {
    if (rate < 1 || rate > 5) {
      throw new BadRequestException("Az értékelés 1 és 5 között kell legyen");
    }
    return await this.prisma.$transaction(async (tx) => {
      await tx.recipe.findUniqueOrThrow({
        where: { id: recipeId },
        select: { id: true },
      });
      // 2️⃣ Rating mentése
      await tx.rating.upsert({
        where: {
          userId_recipeId: {
            userId,
            recipeId,
          },
        },
        update: {
          rate: rate,
        },
        create: {
          rate: rate,
          recipeId,
          userId,
        },
      });

      const agg = await tx.rating.aggregate({
        where: { recipeId },
        _avg: { rate: true },
        _count: true,
      });

      return tx.recipe.update({
        where: { id: recipeId },
        data: {
          avgRating: agg._avg.rate ?? 0,
          ratingCount: agg._count,
        },
      });
    });
  }

  async getMyRating(userId: string, recipeId: string) {
    const rating = await this.prisma.rating.findUnique({
      where: { userId_recipeId: { userId, recipeId } },
    });
    return { rate: rating?.rate ?? null };
  }

  async getRecipeStats(recipeId: string) {
    const [count, avg] = await Promise.all([
      this.prisma.rating.count({ where: { recipeId } }),
      this.prisma.rating.aggregate({
        where: { recipeId },
        _avg: { rate: true },
      }),
    ]);
    return { count, average: avg._avg.rate ?? 0 };
  }
}
