import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, recipeId: string, text: string) {
    const recipe = await this.prisma.recipe.findUnique({
      where: { id: recipeId },
    });
    if (!recipe) throw new NotFoundException("Recept nem található");
    return this.prisma.comment.create({
      data: { userId, recipeId, text },
      include: { user: { select: { id: true, name: true, picture: true } } },
    });
  }

  async findByRecipe(recipeId: string, skip = 0, take = 50) {
    const [data, total] = await Promise.all([
      this.prisma.comment.findMany({
        where: { recipeId },
        skip,
        take,
        orderBy: { createdAt: "desc" },
        include: { user: { select: { id: true, name: true, picture: true } } },
      }),
      this.prisma.comment.count({ where: { recipeId } }),
    ]);
    return { data, total };
  }

  async update(id: string, userId: string, text: string) {
    const comment = await this.prisma.comment.findUnique({ where: { id } });
    if (!comment) throw new NotFoundException("Hozzászólás nem található");
    if (comment.userId !== userId)
      throw new ForbiddenException("Nincs jogosultságod");
    return this.prisma.comment.update({
      where: { id },
      data: { text },
      include: { user: { select: { id: true, name: true } } },
    });
  }

  async remove(id: string, userId: string) {
    const comment = await this.prisma.comment.findUnique({ where: { id } });
    if (!comment) throw new NotFoundException("Hozzászólás nem található");
    if (comment.userId !== userId)
      throw new ForbiddenException("Nincs jogosultságod");
    await this.prisma.comment.delete({ where: { id } });
    return { deleted: true };
  }
}
