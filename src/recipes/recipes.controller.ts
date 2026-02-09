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
import { RecipesService } from "./recipes.service";
import { CreateRecipeDto } from "./dto/create-recipe.dto";
import { UpdateRecipeDto } from "./dto/update-recipe.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { query } from "express";
import { AdminGuard } from "@/auth/guards/admin-auth.guard";

@Controller("recipes")
export class RecipesController {
  constructor(private recipes: RecipesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@CurrentUser() user: { id: string }, @Body() dto: CreateRecipeDto) {
    return this.recipes.create(user.id, dto);
  }

  @Get()
  findAll(
    @Query("skip") skip?: string,
    @Query("take") take?: string,
    @Query("categoryId") categoryId?: string,
    @Query("cuisinId") cuisinId?: string,
    @Query("ingredientIds") ingredientIds?: string,
    @Query("search") search?: string,
  ) {
    return this.recipes.findAll(
      skip ? parseInt(skip, 10) : 0,
      take ? parseInt(take, 10) : 20,
      categoryId,
      cuisinId,
      ingredientIds ? ingredientIds.split(",") : [],
      search,
    );
  }

  @Get("my")
  @UseGuards(JwtAuthGuard)
  myRecipes(
    @CurrentUser() user: { id: string },
    @Query("skip") skip?: string,
    @Query("take") take?: string,
    @Query("categoryId") categoryId?: string,
    @Query("cuisineId") cuisineId?: string,
    @Query("search") search?: string,
  ) {
    return this.recipes.findByUser(
      user.id,
      skip ? parseInt(skip, 10) : 0,
      take ? parseInt(take, 10) : 20,
      categoryId,
      cuisineId,
      search,
    );
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.recipes.findOne(id);
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  update(
    @Param("id") id: string,
    @CurrentUser() user: { id: string },
    @Body() dto: UpdateRecipeDto,
  ) {
    return this.recipes.update(id, user.id, dto);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  remove(@Param("id") id: string, @CurrentUser() user: { id: string }) {
    return this.recipes.remove(id, user.id);
  }
  @Delete("admin/:id")
  @UseGuards(JwtAuthGuard, AdminGuard)
  adminRemove(@Param("id") id: string) {
    return this.recipes.adminRemove(id);
  }
}
