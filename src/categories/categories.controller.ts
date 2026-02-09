import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { IsString, MinLength } from "class-validator";
import { AdminGuard } from "@/auth/guards/admin-auth.guard";

class CreateCategoryDto {
  @IsString()
  @MinLength(1)
  name: string;
}

@Controller("categories")
export class CategoriesController {
  constructor(private categories: CategoriesService) {}

  @Post()
  @UseGuards(JwtAuthGuard, AdminGuard)
  create(@Body() dto: CreateCategoryDto) {
    return this.categories.create(dto.name);
  }

  @Get()
  findAll(
    @Query("skip") skip?: string,
    @Query("take") take?: string,
    @Query("search") search?: string,
  ) {
    return this.categories.findAll(
      skip ? parseInt(skip, 10) : 0,
      take ? parseInt(take, 10) : 50,
      search,
    );
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.categories.findOne(id);
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard, AdminGuard)
  update(@Param("id") id: string, @Body() dto: CreateCategoryDto) {
    return this.categories.update(id, dto.name);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard, AdminGuard)
  remove(@Param("id") id: string) {
    return this.categories.remove(id);
  }
}
