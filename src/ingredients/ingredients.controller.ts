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
import { IngredientsService } from "./ingredients.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { IsString, MinLength } from "class-validator";

class CreateIngredientDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  unit: string;
}

@Controller("ingredients")
export class IngredientsController {
  constructor(private ingredients: IngredientsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateIngredientDto) {
    return this.ingredients.create(dto.name, dto.unit);
  }

  @Get()
  findAll(
    @Query("skip") skip?: string,
    @Query("take") take?: string,
    @Query("search") search?: string,
  ) {
    return this.ingredients.findAll(
      skip ? parseInt(skip, 10) : 0,
      take ? parseInt(take, 10) : 100,
      search,
    );
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.ingredients.findOne(id);
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  update(@Param("id") id: string, @Body() dto: CreateIngredientDto) {
    return this.ingredients.update(id, dto.name, dto.unit);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  remove(@Param("id") id: string) {
    return this.ingredients.remove(id);
  }
}
