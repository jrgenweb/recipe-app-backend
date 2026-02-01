import { Module } from "@nestjs/common";
import { RecipeImagesService } from "./recipe-images.service";
import {
  RecipeImagesController,
  RecipeImagesManageController,
} from "./recipe-images.controller";

@Module({
  providers: [RecipeImagesService],
  controllers: [RecipeImagesController, RecipeImagesManageController],
  exports: [RecipeImagesService],
})
export class RecipeImagesModule {}
