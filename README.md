# Recipe App – NestJS + Prisma + SQLite

A **projekt.md** alapján készült recept alkalmazás backend: REST API, auth, regisztráció, jogosultságkezelés.

## Követelmények

- Node.js 18+
- npm

## Telepítés és indítás

```bash
# Függőségek
npm install

# Környezeti változók (már létezik .env, ellenőrizd)
# DATABASE_URL="file:./dev.db"
# JWT_SECRET="titkos-kulcs"

# Prisma kliens generálás és adatbázis létrehozása
npx prisma generate
npx prisma migrate dev --name init

# Fejlesztői szerver (watch mode)
npm run start:dev
```

Az API alapértelmezetten: **http://localhost:3000**

## API végpontok

### Auth (nyilvános)
- `POST /auth/register` – Regisztráció (body: name, email, password)
- `POST /auth/login` – Bejelentkezés (body: email, password)

### Auth (védett, Bearer token)
- `GET /auth/me` – Bejelentkezett felhasználó adatai

### Felhasználók (védett)
- `GET /users` – Lista (query: skip, take)
- `GET /users/:id` – Egy felhasználó

### Receptek
- `GET /recipes` – Lista (query: skip, take, categoryId, search)
- `GET /recipes/:id` – Egy recept részletei
- `POST /recipes` – Új recept (védett)
- `PATCH /recipes/:id` – Szerkesztés (védett, csak tulajdonos)
- `DELETE /recipes/:id` – Törlés (védett, csak tulajdonos)
- `GET /recipes/my` – Saját receptek (védett)

### Kategóriák
- `GET /categories` – Lista
- `GET /categories/:id` – Egy kategória
- `POST /categories` – Új (védett, body: name)
- `PATCH /categories/:id` – Szerkesztés (védett)
- `DELETE /categories/:id` – Törlés (védett)

### Hozzászólások
- `GET /recipes/:recipeId/comments` – Recept hozzászólásai
- `POST /recipes/:recipeId/comments` – Új hozzászólás (védett, body: text)
- `PATCH /comments/:id` – Szerkesztés (védett, csak tulajdonos)
- `DELETE /comments/:id` – Törlés (védett, csak tulajdonos)

### Kedvencek (védett)
- `GET /favorites` – Saját kedvencek
- `POST /favorites/:recipeId` – Kedvencnek jelölés
- `DELETE /favorites/:recipeId` – Kedvenc eltávolítás
- `GET /favorites/check/:recipeId` – Kedvenc-e

### Értékelések
- `GET /recipes/:recipeId/ratings/stats` – Átlag és darabszám
- `POST /recipes/:recipeId/ratings` – Értékelés 1–5 (védett, body: rate)
- `GET /recipes/:recipeId/ratings/me` – Saját értékelés (védett)

### Hozzávalók
- `GET /ingredients` – Lista (query: skip, take, search)
- `GET /ingredients/:id` – Egy hozzávaló
- `POST /ingredients` – Új (védett, body: name, unit)
- `PATCH /ingredients/:id` – Szerkesztés (védett)
- `DELETE /ingredients/:id` – Törlés (védett)

### Receptképek
- `GET /recipes/:recipeId/images` – Recept képei
- `POST /recipes/:recipeId/images` – Kép hozzáadása (védett, csak recept tulajdonos, body: url)
- `DELETE /recipe-images/:id` – Kép törlése (védett, csak recept tulajdonos)

## Jogosultság

- **Védett végpontok**: `Authorization: Bearer <access_token>` header szükséges (login/register válaszából).
- Recepteknél: szerkesztés/törlés csak a recept tulajdonosának engedélyezett.
- Hozzászólás: szerkesztés/törlés csak a hozzászólás szerzőjének.

## Parancsok

| Parancs | Leírás |
|---------|--------|
| `npm run start:dev` | Fejlesztői szerver (watch) |
| `npm run build` | Production build |
| `npm run start:prod` | Production indítás |
| `npx prisma studio` | Adatbázis böngésző UI |
| `npx prisma migrate dev` | Új migráció készítése |

Az alkalmazás a **projekt.md** adatbázis tervének megfelelően működik (users, recipes, categories, recipe_categories, comments, favorites, ratings, recipe_images, recipe_ingredients, ingredients, recipe_steps).
