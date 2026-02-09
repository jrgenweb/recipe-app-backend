import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CurrentUser } from "@/auth/decorators/current-user.decorator";
import { ICreateUser, IUser, IUserChangePassword } from "@recipe/shared";
import { IsIn, IsString, MinLength } from "class-validator";
import { RegisterDto } from "@/auth/dto/register.dto";
import { AdminGuard } from "@/auth/guards/admin-auth.guard";

export class AdminCreateUserDto extends RegisterDto {
  @IsString()
  @IsIn(["ADMIN", "USER"])
  role: "ADMIN" | "USER";
}

export class UserChangePasswordDto implements IUserChangePassword {
  @IsString()
  oldPassword: string;
  @IsString()
  @MinLength(6, {
    message: "A jelszónak legalább 6 karakter hosszúnak kell lennie",
  })
  newPassword: string;
}

@Controller("users")
export class UsersController {
  constructor(private users: UsersService) {}

  /** ADMIN */

  @Get("admin")
  @UseGuards(JwtAuthGuard, AdminGuard)
  findAll(
    @Query("skip") skip?: string,
    @Query("take") take?: string,
    @Query("name") name?: string,
    @Query("email") email?: string,
  ) {
    return this.users.findAll(
      skip ? parseInt(skip, 10) : 0,
      take ? parseInt(take, 10) : 20,
      name,
      email,
    );
  }
  @Post("admin")
  @UseGuards(JwtAuthGuard, AdminGuard)
  adminCreate(@Body() dto: AdminCreateUserDto) {
    return this.users.adminCreate(dto);
  }

  @Patch("admin/:id")
  @UseGuards(JwtAuthGuard, AdminGuard)
  adminUpdate(
    @Param("id") id: string,
    @Body() dto: Partial<AdminCreateUserDto>,
  ) {
    return this.users.adminUpdate(id, dto);
  }

  @Delete("admin/:id")
  @UseGuards(JwtAuthGuard, AdminGuard)
  adminDelete(@Param("id") id: string) {
    return this.users.remove(id);
  }
  @Get(":id")
  @UseGuards(JwtAuthGuard)
  findOne(@Param("id") id: string) {
    return this.users.findById(id);
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  update(
    @CurrentUser() user: { id: string },
    @Param("id") id: string,
    @Body() dto: Partial<RegisterDto>,
  ) {
    if (user.id !== id) {
      return { error: "Nem módosíthatod más adatait!" };
    }
    return this.users.update(id, dto);
  }

  @Patch("change-password/:id")
  @UseGuards(JwtAuthGuard)
  changePassword(
    @CurrentUser() user: { id: string },
    @Body() dto: UserChangePasswordDto,
    @Param("id") id: string,
  ) {
    if (user.id !== id) {
      return { error: "Nem módosíthatod más adatait!" };
    }
    return this.users.changePassword(user.id, dto);
  }
  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  remove(@CurrentUser() user: { id: string }, @Param("id") id: string) {
    if (user.id !== id) {
      return { error: "Nem törölheted más adatait!" };
    }
    return this.users.remove(id);
  }
}
