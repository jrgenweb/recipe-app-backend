import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { remove as removeDiacritics } from "diacritics";

@Injectable()
export class IngredientsService {
  constructor(private prisma: PrismaService) {}

  async create(name: string, unit: string) {
    return this.prisma.ingredient.create({ data: { name, unit } });
  }

  async findAll(skip = 0, take = 20, search?: string) {
    const where = search
      ? {
          OR: [{ name: { contains: search } }],
        }
      : {};
    const [data, total] = await Promise.all([
      this.prisma.ingredient.findMany({
        where,
        skip,
        take,
        orderBy: { name: "asc" },
      }),
      this.prisma.ingredient.count({ where }),
    ]);
    return { data, total };
  }

  async findOne(id: string) {
    const ingredient = await this.prisma.ingredient.findUnique({
      where: { id },
      include: { _count: { select: { recipeIngredients: true } } },
    });
    if (!ingredient) throw new NotFoundException("Hozzávaló nem található");
    return ingredient;
  }

  async update(id: string, name: string, unit: string) {
    await this.findOne(id);
    return this.prisma.ingredient.update({
      where: { id },
      data: { name, unit },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.ingredient.delete({ where: { id } });
    return { deleted: true };
  }
}
