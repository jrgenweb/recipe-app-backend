import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";
import { seedUsers } from "./users";

import { seedIngredients } from "./ingredients";
import { seedCagories } from "./categories";
import { seedCuisines } from "./cusisines";
import { MOCK_RECIPES } from "./_mock-recipes";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  const { admin, user } = await seedUsers();
  const { categoryRecords } = await seedCagories();
  const { cuisineRecords } = await seedCuisines();
  const { ingredientRecords } = await seedIngredients();

  //Receptek beszúrása

  const recipeRecords = [];

  for (let recipe of MOCK_RECIPES) {
    //Categories
    const categoryIds = categoryRecords
      .filter((c) =>
        recipe.recipeCategories
          .map((r) => r.toLowerCase())
          .includes(c.name.toLowerCase()),
      )
      .map((c) => c.id);
    //console.log("categoryIds", recipe.name, categoryIds);
    //Cuisine
    const cuisineId = cuisineRecords.find(
      (c) => c.name.toLowerCase() === recipe.cuisine.toLowerCase(),
    )?.id;
    //images
    const imageUrls = recipe.recipeImages.map((i) => i.url);

    // ingredients with ids,quantities
    const createIngredients: { ingredientId: string; quantity: number }[] =
      recipe.recipeIngredients.map((ri) => {
        const ingredientRecord = ingredientRecords.find(
          (i) => i.name === ri.name,
        );
        return { ingredientId: ingredientRecord!.id, quantity: ri.quantity };
      });
    const steps = recipe.recipeSteps;

    const recipeRecord = await prisma.recipe.create({
      data: {
        user: { connect: { id: user.id } },
        cuisine: { connect: { id: cuisineId } },
        name: recipe.name,

        description: recipe.description,
        recipeCategories: categoryIds?.length
          ? { create: categoryIds.map((categoryId) => ({ categoryId })) }
          : undefined,
        recipeSteps: steps?.length
          ? {
              create: steps.map((s) => ({
                name: s.name,
                description: s.description,
                stepOrder: s.stepOrder,
              })),
            }
          : undefined,
        recipeIngredients: createIngredients?.length
          ? {
              create: createIngredients.map((i) => ({
                ingredientId: i.ingredientId,
                quantity: i.quantity,
              })),
            }
          : undefined,
        recipeImages: imageUrls?.length
          ? { create: imageUrls.map((url) => ({ url })) }
          : undefined,
      },
      include: {
        user: { select: { id: true, name: true, email: true } },
        recipeCategories: { include: { category: true } },
        recipeSteps: { orderBy: { stepOrder: "asc" } },
        recipeIngredients: { include: { ingredient: true } },
        recipeImages: true,
        _count: { select: { comments: true, ratings: true } },
      },
    });
    recipeRecords.push(recipeRecord);
  } //for loop end

  // Példa recept

  console.log(MOCK_RECIPES.length + " recipes seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
