import {
  IsString,
  IsArray,
  IsOptional,
  ValidateNested,
  Min,
  Max,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { IAddIngredient, ICreateRecipe } from "@recipe/shared";

export class CreateRecipeStepDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @Min(1)
  stepOrder: number;
}

export class CreateRecipeIngredientDto implements IAddIngredient {
  @IsString()
  ingredientId: string;

  @IsNumber()
  quantity: number; // 'g' | 'ml' | 'db' stb.
}

export class CreateRecipeDto implements ICreateRecipe {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  cuisineId: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categoryIds?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRecipeStepDto)
  steps?: CreateRecipeStepDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRecipeIngredientDto)
  ingredients?: CreateRecipeIngredientDto[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  imageUrls?: string[];
}
