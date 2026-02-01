import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CuisinesService {
  constructor(private prisma: PrismaService) {}

  async create(name: string) {
    return this.prisma.cuisine.create({ data: { name } });
  }

  async findAll(skip = 0, take = 50) {
    const [data, total] = await Promise.all([
      this.prisma.cuisine.findMany({ skip, take, orderBy: { name: "asc" } }),
      this.prisma.cuisine.count(),
    ]);
    return { data, total };
  }

  async findOne(id: string) {
    const cuisine = await this.prisma.cuisine.findUnique({
      where: { id },
      include: { _count: { select: { recipes: true } } },
    });
    if (!cuisine) throw new NotFoundException("Kategória nem található");
    return cuisine;
  }

  async update(id: string, name: string) {
    await this.findOne(id);
    return this.prisma.cuisine.update({ where: { id }, data: { name } });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.cuisine.delete({ where: { id } });
    return { deleted: true };
  }
}
