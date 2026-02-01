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
import { CommentsService } from "./comments.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { IsString, MinLength } from "class-validator";

class CreateCommentDto {
  @IsString()
  @MinLength(1)
  text: string;
}

@Controller("recipes/:recipeId/comments")
export class CommentsController {
  constructor(private comments: CommentsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Param("recipeId") recipeId: string,
    @CurrentUser() user: { id: string },
    @Body() dto: CreateCommentDto
  ) {
    return this.comments.create(user.id, recipeId, dto.text);
  }

  @Get()
  findByRecipe(
    @Param("recipeId") recipeId: string,
    @Query("skip") skip?: string,
    @Query("take") take?: string
  ) {
    return this.comments.findByRecipe(
      recipeId,
      skip ? parseInt(skip, 10) : 0,
      take ? parseInt(take, 10) : 50
    );
  }
}

@Controller("comments")
export class CommentsManageController {
  constructor(private comments: CommentsService) {}

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  update(
    @Param("id") id: string,
    @CurrentUser() user: { id: string },
    @Body() dto: CreateCommentDto
  ) {
    return this.comments.update(id, user.id, dto.text);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  remove(@Param("id") id: string, @CurrentUser() user: { id: string }) {
    return this.comments.remove(id, user.id);
  }
}
