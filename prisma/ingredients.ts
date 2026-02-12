import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { MOCK_RECIPES } from "./_mock-recipes";

const prisma = new PrismaClient();

export async function seedIngredients() {
  console.log("Seeding ingredients");

  // Ingredients (például 50 db az előző listából)
  const MOCK_INGREDIENTS = [
    { id: "1", name: "Csirke", unit: "g" },
    { id: "2", name: "Marhahús", unit: "g" },
    { id: "3", name: "Sertéshús", unit: "g" },
    { id: "4", name: "Pulyka", unit: "g" },
    { id: "5", name: "Sajt", unit: "g" },
    { id: "6", name: "Tojás", unit: "db" },
    { id: "7", name: "Liszt", unit: "g" },
    { id: "8", name: "Cukor", unit: "g" },
    { id: "9", name: "Só", unit: "g" },
    { id: "10", name: "Bors", unit: "g" },
    { id: "11", name: "Olaj", unit: "ml" },
    { id: "12", name: "Vaj", unit: "g" },
    { id: "13", name: "Tej", unit: "ml" },
    { id: "14", name: "Tejszín", unit: "ml" },
    { id: "15", name: "Víz", unit: "ml" },
    { id: "16", name: "Paradicsom", unit: "g" },
    { id: "17", name: "Uborka", unit: "g" },
    { id: "18", name: "Paprika", unit: "g" },
    { id: "19", name: "Krumpli", unit: "g" },
    { id: "20", name: "Tészta", unit: "g" },
    { id: "21", name: "Rizs", unit: "g" },
    { id: "22", name: "Csokoládé", unit: "g" },
    { id: "23", name: "Méz", unit: "g" },
    { id: "24", name: "Fokhagyma", unit: "g" },
    { id: "25", name: "Hagyma", unit: "g" },
    { id: "26", name: "Sárgarépa", unit: "g" },
    { id: "27", name: "Zeller", unit: "g" },
    { id: "28", name: "Petrezselyem", unit: "g" },
    { id: "29", name: "Bazsalikom", unit: "g" },
    { id: "30", name: "Oregano", unit: "g" },
    { id: "31", name: "Kakukkfű", unit: "g" },
    { id: "32", name: "Chili paprika", unit: "g" },
    { id: "33", name: "Olívabogyó", unit: "g" },
    { id: "34", name: "Csemege uborka", unit: "g" },
    { id: "35", name: "Tonhal", unit: "g" },
    { id: "36", name: "Gomba", unit: "g" },
    { id: "37", name: "Burgonya chips", unit: "g" },
    { id: "38", name: "Saláta mix", unit: "g" },
    { id: "39", name: "Kukorica", unit: "g" },
    { id: "40", name: "Bab", unit: "g" },
    { id: "41", name: "Lencse", unit: "g" },
    { id: "42", name: "Tonhal konzerv", unit: "g" },
    { id: "43", name: "Kókuszreszelék", unit: "g" },
    { id: "44", name: "Vanília", unit: "g" },
    { id: "45", name: "Sütőpor", unit: "g" },
    { id: "46", name: "Szódabikarbóna", unit: "g" },
    { id: "47", name: "Alma", unit: "db" },
    { id: "48", name: "Banán", unit: "db" },
    { id: "49", name: "Narancs", unit: "db" },
    { id: "50", name: "Citrom", unit: "db" },
    { id: "51", name: "Eper", unit: "g" },
    { id: "52", name: "Málna", unit: "g" },
    { id: "53", name: "Áfonya", unit: "g" },
    { id: "54", name: "Szőlő", unit: "g" },
    { id: "55", name: "Almás pite töltelék", unit: "g" },
    { id: "56", name: "Csirkecomb", unit: "g" },
    { id: "57", name: "Csirkemell", unit: "g" },
    { id: "58", name: "Fahéj", unit: "g" },
    { id: "59", name: "Szegfűszeg", unit: "g" },
    { id: "60", name: "Gyömbér", unit: "g" },
    { id: "61", name: "Tejföl", unit: "ml" },
    { id: "62", name: "Joghurt", unit: "ml" },
    { id: "63", name: "Párolt rizs", unit: "g" },
    { id: "64", name: "Paradicsomszósz", unit: "ml" },
    { id: "65", name: "Majonéz", unit: "ml" },
    { id: "66", name: "Mustár", unit: "ml" },
    { id: "67", name: "Kenyér", unit: "db" },
    { id: "68", name: "Zsemle", unit: "db" },
    { id: "69", name: "Bagett", unit: "db" },
    { id: "70", name: "Pizza tészta", unit: "g" },
    { id: "71", name: "Spenót", unit: "g" },
    { id: "72", name: "Cukkini", unit: "g" },
    { id: "73", name: "Padlizsán", unit: "g" },
    { id: "74", name: "Tonhalkonzerv", unit: "g" },
    { id: "75", name: "Kókusztej", unit: "ml" },
    { id: "76", name: "Feta sajt", unit: "g" },
    { id: "77", name: "Parmezán", unit: "g" },
    { id: "78", name: "Mozzarella", unit: "g" },
    { id: "79", name: "Pecorino", unit: "g" },
    { id: "80", name: "Csirkeleves alap", unit: "ml" },
    { id: "81", name: "Zöldborsó", unit: "g" },
    { id: "82", name: "Sárgaborsó", unit: "g" },
    { id: "83", name: "Quinoa", unit: "g" },
    { id: "84", name: "Bulgur", unit: "g" },
    { id: "85", name: "Chili pehely", unit: "g" },
    { id: "86", name: "Paprikakrém", unit: "g" },
    { id: "87", name: "Szárított paradicsom", unit: "g" },
    { id: "88", name: "Pácolt uborka", unit: "g" },
    { id: "89", name: "Fahéjas cukor", unit: "g" },
    { id: "90", name: "Sütőcsoki", unit: "g" },
    { id: "91", name: "Mandula", unit: "g" },
    { id: "92", name: "Dió", unit: "g" },
    { id: "93", name: "Mogyoró", unit: "g" },
    { id: "94", name: "Kakaópor", unit: "g" },
    { id: "95", name: "Vaníliás cukor", unit: "g" },
    { id: "96", name: "Kenyérmorzsa", unit: "g" },
    { id: "97", name: "Szalonna", unit: "g" },
    { id: "98", name: "Füstölt sonka", unit: "g" },
    { id: "99", name: "Sajtkrém", unit: "g" },
    { id: "100", name: "Tonhal olajban", unit: "g" },
  ].map((i) => ({ name: i.name, unit: i.unit }));

  const ingredients = new Set([
    ...MOCK_RECIPES.map((recipe) => {
      const ingredients = recipe.recipeIngredients.map((i) => {
        return { name: i.name, unit: i.unit };
      });

      return ingredients;
    }).flat(1),
    ...MOCK_INGREDIENTS,
  ]);

  const ingredientRecords = [];
  for (const ing of ingredients) {
    const record = await prisma.ingredient.upsert({
      where: { name: ing.name },
      update: {},
      create: ing,
    });
    ingredientRecords.push(record);
  }
  console.log(ingredients.size + " ingredients successfully added");
  return { ingredientRecords };
}
