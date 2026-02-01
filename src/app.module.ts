import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "./prisma/prisma.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { RecipesModule } from "./recipes/recipes.module";
import { CategoriesModule } from "./categories/categories.module";
import { CommentsModule } from "./comments/comments.module";
import { FavoritesModule } from "./favorites/favorites.module";
import { RatingsModule } from "./ratings/ratings.module";
import { IngredientsModule } from "./ingredients/ingredients.module";
import { RecipeImagesModule } from "./recipe-images/recipe-images.module";
import { CuisinesModule } from "./cuisines/cuisines.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    RecipesModule,
    CategoriesModule,
    CommentsModule,
    FavoritesModule,
    RatingsModule,
    IngredientsModule,
    RecipeImagesModule,
    CuisinesModule,
  ],
})
export class AppModule {}
