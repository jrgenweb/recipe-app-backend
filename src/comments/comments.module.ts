import { Module } from "@nestjs/common";
import { CommentsService } from "./comments.service";
import {
  CommentsController,
  CommentsManageController,
} from "./comments.controller";

@Module({
  providers: [CommentsService],
  controllers: [CommentsController, CommentsManageController],
  exports: [CommentsService],
})
export class CommentsModule {}
