import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Query,
  UseGuards,
} from "@nestjs/common";
import { FavoritesService } from "./favorites.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CurrentUser } from "../auth/decorators/current-user.decorator";

@Controller("favorites")
@UseGuards(JwtAuthGuard)
export class FavoritesController {
  constructor(private favorites: FavoritesService) {}

  @Post(":recipeId")
  add(
    @Param("recipeId") recipeId: string,
    @CurrentUser() user: { id: string }
  ) {
    return this.favorites.add(user.id, recipeId);
  }

  @Delete(":recipeId")
  remove(
    @Param("recipeId") recipeId: string,
    @CurrentUser() user: { id: string }
  ) {
    return this.favorites.remove(user.id, recipeId);
  }

  @Get()
  my(
    @CurrentUser() user: { id: string },
    @Query("skip") skip?: string,
    @Query("take") take?: string
  ) {
    return this.favorites.findByUser(
      user.id,
      skip ? parseInt(skip, 10) : 0,
      take ? parseInt(take, 10) : 20
    );
  }

  @Get("check/:recipeId")
  check(
    @Param("recipeId") recipeId: string,
    @CurrentUser() user: { id: string }
  ) {
    return this.favorites.isFavorite(user.id, recipeId);
  }
}
