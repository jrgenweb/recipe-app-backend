import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdminCreateUserDto, UserChangePasswordDto } from "./users.controller";
import * as bcrypt from "bcryptjs";
import { IAdminCreateUser } from "@recipe/shared";
import { RegisterDto } from "@/auth/dto/register.dto";
import { contains, IsIn, IsString } from "class-validator";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        picture: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!user) throw new NotFoundException("Felhasználó nem található");
    return user;
  }

  async changePassword(userId: string, dto: UserChangePasswordDto) {
    const newPassword = await bcrypt.hash(dto.newPassword, 10);

    const existing = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (existing) {
      const isPasswordValid = await bcrypt.compare(
        dto.oldPassword,
        existing.password,
      );
      if (!isPasswordValid) {
        throw new NotFoundException("A régi jelszó nem helyes");
      }
      await this.prisma.user.update({
        where: { id: userId },
        data: { password: newPassword },
      });
    } else {
      throw new NotFoundException("Felhasználó nem található");
    }
    return { message: "Jelszó sikeresen megváltoztatva" };
  }
  async update(
    id: string,
    dto: Partial<{ name: string; email: string; picture: string }>,
  ) {
    const user = await this.prisma.user.update({
      where: { id },
      data: dto,
      select: {
        id: true,
        name: true,
        email: true,
        picture: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!user) throw new NotFoundException("Felhasználó nem található");
    return user;
  }
  async remove(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException("Felhasználó nem található");
    await this.prisma.user.delete({ where: { id } });
    return { deleted: true };
  }

  /** admin */
  async findAll(skip = 0, take = 20, name?: string, email?: string) {
    const where: Record<string, unknown> = {};

    if (name) {
      where.name = { contains: name };
    }
    if (email) {
      where.email = { contains: email };
    }

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        skip,
        take,
        select: {
          id: true,
          name: true,
          email: true,
          picture: true,
          role: true,
          createdAt: true,
          _count: {
            select: {
              ratings: true,
              comments: true,
              recipes: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        where,
      }),
      this.prisma.user.count({ where }),
    ]);
    return { data: users, total };
  }
  async adminCreate(dto: AdminCreateUserDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existing) {
      throw new ConflictException("Ez az email már regisztrálva van");
    }
    const hashed = await bcrypt.hash(dto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        role: dto.role,
        picture: dto.picture,
        password: hashed,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        picture: true,
        createdAt: true,
      },
    });
    return user;
  }
  async adminUpdate(userId: string, dto: Partial<AdminCreateUserDto>) {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: dto,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        picture: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!user) throw new NotFoundException("Felhasználó nem található");
    return user;
  }
}
