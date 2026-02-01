import { Controller, Get, Post, Body, Param, UseGuards } from "@nestjs/common";
import { RatingsService } from "./ratings.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { IsInt, Min, Max } from "class-validator";
import { Type } from "class-transformer";

class SetRatingDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(5)
  rate: number;
}

@Controller("recipes/:recipeId/ratings")
export class RatingsController {
  constructor(private ratings: RatingsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  set(
    @Param("recipeId") recipeId: string,
    @CurrentUser() user: { id: string },
    @Body() dto: SetRatingDto,
  ) {
    console.log("Incoming recipeId:", recipeId);
    return this.ratings.setRating(user.id, recipeId, dto.rate);
  }

  @Get("me")
  @UseGuards(JwtAuthGuard)
  my(@Param("recipeId") recipeId: string, @CurrentUser() user: { id: string }) {
    return this.ratings.getMyRating(user.id, recipeId);
  }

  @Get("stats")
  stats(@Param("recipeId") recipeId: string) {
    return this.ratings.getRecipeStats(recipeId);
  }
}
