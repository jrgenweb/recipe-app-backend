# Recipe App – NestJS + Prisma + PostgreSql

This is the backend for a recipe app.
It uses REST API, authentication, registration, and role-based access.

## Requirements

- Node.js 18+
- npm
- docker

## Installation and Start

You need to rename the .env.example -> .env, and change the DATABASE_URl connection string

```bash
# Install dependencies
npm install

# Environment variables (check .env)
# DATABASE_URL="file:./dev.db"
# JWT_SECRET="secret-key"

# Generate Prisma client and create database
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed

# Start development server (watch mode)
npm run start:dev
```

Default API URL: **http://localhost:3000**

## API Endpoints

### Auth (public)
- `POST /auth/register` – Register (body: name, email, password)
- `POST /auth/login` – Login (body: email, password)
- `POST /auth/check-email` - Check if email exists

### Auth (protected, Bearer token)
- `GET /auth/me` – Current user info

### Felhasználók (védett)
- `GET /users` – List (query: skip, take)
- `GET /users/:id` – One user

### Recipes
- `GET /recipes` – List (query: skip, take, categoryId, search)
- `GET /recipes/:id` – One recipe


### Recipes (protected)
- `POST /recipes` – Add new recipe 
- `PATCH /recipes/:id` – Edit recipe (only owner)
- `DELETE /recipes/:id` – Delete recipe (only owner)
- `GET /recipes/my` – My recipes 


### Cuisines 
- `GET /cuisines` – List

### Cuisines (protected, admin)
- `GET /cuisines` – List
- `POST /cuisines` – Add new cuisine ( body: name)
- `PATCH /cuisines/:id` – Edit cuisine 
- `DELETE /cuisines/:id` – Delete 
### Categories
- `GET /categories` – List
- `GET /categories/:id` – One category
- `POST /categories` – Add category (protected, body: name)
- `PATCH /categories/:id` – Edit category (protected)
- `DELETE /categories/:id` – Delete category (protected)

### Comments
- `GET /recipes/:recipeId/comments` – Comments for recipes
- `POST /recipes/:recipeId/comments` – Add comment (protected, body: text)
- `PATCH /comments/:id` – Edit comment (protected, only owner)
- `DELETE /comments/:id` – Delete comment (protected, only owner)

### Favorites (protected)
- `GET /favorites` – My favorites
- `POST /favorites/:recipeId` – Add favorite
- `DELETE /favorites/:recipeId` – Remove favorite
- `GET /favorites/check/:recipeId` – Check if favorite

### Ratings
- `GET /recipes/:recipeId/ratings/stats` – Average and count
- `POST /recipes/:recipeId/ratings` – Rate 1–5 (protected, body: rate)
- `GET /recipes/:recipeId/ratings/me` – My rating (protected)

### Ingredients
- `GET /ingredients` – List (query: skip, take, search)
- `GET /ingredients/:id` – One ingredient
- `POST /ingredients` – Add ingredient (protected, body: name, unit)
- `PATCH /ingredients/:id` – Edit ingredient (protected)
- `DELETE /ingredients/:id` – Delete (protected)

### Recipe Images
- `GET /recipes/:recipeId/images` – Images for recipe
- `POST /recipes/:recipeId/images` – Add image (protected, only owner, body: url)
- `DELETE /recipe-images/:id` – Delete image (protected, only owner)

## Permissions

- **Protected endpoints**: `Authorization: Bearer <access_token>` header 


## Commands

| Command | Description |
|---------|--------|
| `npm run start:dev` | Start dev server (watch) |
| `npm run build` | Production build |
| `npm run start:prod` | Run production server |
| `npx prisma studio` | Open database UI |
| `npx prisma migrate dev` | Create new migration |

The app works with the database in **projekt.md**:
(users, recipes, categories, recipe_categories, comments, favorites, ratings, recipe_images, recipe_ingredients, ingredients, recipe_steps)
