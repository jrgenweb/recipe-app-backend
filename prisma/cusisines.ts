import { PrismaClient } from "@prisma/client";
import { MOCK_RECIPES } from "./_mock-recipes";

const prisma = new PrismaClient();

export async function seedCuisines() {
  console.log("Seeding cuisines");
  // Cuisines

  const cuisines = Array.from(
    new Set([
      ...MOCK_RECIPES.map((recipe) => {
        return recipe.cuisine;
      }),
      "Magyar",
      "Olasz",
      "Kínai",
      "Japán",
      "Indiai",
      "Mexikói",
      "Francia",
      "Görög",
      "Spanyol",
      "Amerikai",
    ]),
  ).flat(1);

  const cuisineRecords = [];
  for (let name of cuisines) {
    name = name.toLowerCase();
    const c = await prisma.cuisine.upsert({
      where: { name },
      update: {},
      create: { name },
    });
    cuisineRecords.push(c);
  }

  console.log(cuisines.length + " cuisines successfully added");
  return { cuisineRecords };
}
