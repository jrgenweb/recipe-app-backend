import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(name: string) {
    return this.prisma.category.create({ data: { name } });
  }

  async findAll(skip = 0, take = 50) {
    const [data, total] = await Promise.all([
      this.prisma.category.findMany({ skip, take, orderBy: { name: "asc" } }),
      this.prisma.category.count(),
    ]);
    return { data, total };
  }

  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({
      where: { id },
      include: { _count: { select: { recipeCategories: true } } },
    });
    if (!category) throw new NotFoundException("Kategória nem található");
    return category;
  }

  async update(id: string, name: string) {
    await this.findOne(id);
    return this.prisma.category.update({ where: { id }, data: { name } });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.category.delete({ where: { id } });
    return { deleted: true };
  }
}
