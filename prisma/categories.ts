import { PrismaClient } from "@prisma/client";
import { MOCK_RECIPES } from "./_mock-recipes";

const prisma = new PrismaClient();

export async function seedCagories() {
  console.log("Seeding categories");

  // Categories
  const categories = Array.from(
    new Set([
      ...MOCK_RECIPES.map((recipe) => {
        return [...recipe.recipeCategories];
      }).flat(1),
      "Levesek",
      "Főételek",
      "Saláták",
      "Desszertek",
      "Snackek",
      "Italok",
      "Tészták",
      "Pékáruk",
      "Gyümölcsös ételek",
      "Vegetáriánus",
    ]),
  ).flat(1);

  const categoryRecords = [];

  for (const name of categories) {
    const cat = await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name },
    });
    categoryRecords.push(cat);
  }

  console.log(categories.length + " categories successfully added");
  return { categoryRecords };
}
