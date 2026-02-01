import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  UseGuards,
} from "@nestjs/common";
import { RecipeImagesService } from "./recipe-images.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { IsString, IsUrl } from "class-validator";

class AddImageDto {
  @IsString()
  @IsUrl()
  url: string;
}

@Controller("recipes/:recipeId/images")
export class RecipeImagesController {
  constructor(private images: RecipeImagesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  add(
    @Param("recipeId") recipeId: string,
    @CurrentUser() user: { id: string },
    @Body() dto: AddImageDto
  ) {
    return this.images.add(recipeId, user.id, dto.url);
  }

  @Get()
  findByRecipe(@Param("recipeId") recipeId: string) {
    return this.images.findByRecipe(recipeId);
  }
}

@Controller("recipe-images")
@UseGuards(JwtAuthGuard)
export class RecipeImagesManageController {
  constructor(private images: RecipeImagesService) {}

  @Delete(":id")
  remove(@Param("id") id: string, @CurrentUser() user: { id: string }) {
    return this.images.remove(id, user.id);
  }
}
