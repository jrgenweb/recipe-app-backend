import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { PrismaService } from "../prisma/prisma.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { error } from "console";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
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
        picture: dto.picture,
        password: hashed,
      },
      select: {
        id: true,
        name: true,
        email: true,
        picture: true,
        createdAt: true,
      },
    });
    const token = this.jwtService.sign({ sub: user.id, email: user.email });
    return { user, access_token: token };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user || !(await bcrypt.compare(dto.password, user.password))) {
      throw new UnauthorizedException("Hibás email vagy jelszó");
    }
    const token = this.jwtService.sign({ sub: user.id, email: user.email });
    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        picture: user.picture,
        role: user.role,
        createdAt: user.createdAt,
      },
      access_token: token,
    };
  }

  async validateUser(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        picture: true,
        createdAt: true,
      },
    });
  }

  async checkEmail(email: string) {
    const exists = await this.prisma.user.findUnique({ where: { email } });
    if (exists) {
      return {
        available: false,
        message: "Ezzel az email címmel már regisztráltak",
      };
    }
    return { available: true };
  }
}
