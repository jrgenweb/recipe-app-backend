A lent található adatbázis terv alapján készítsd el a recipe appot nestjs + prisma + sqlite, rest api alapokon, auth, regisztráció jogosultság minden működjön benne


# Adatbázis

users
 id
 name
 email
 password
 created_at
 updated_at
 
 
 
recipes
 id
 name
 description 
 user_id
 created_at
 updated_At

 
categories
 id
 name
 created_at
 updated_at

 
recipe_categories
 recipe_id
 category_id


comments
 id
 text
 user_id
 recipe_id
 created_at
 updated_at
 
favorites 
 recipe_id
 user_id
 created_at
 updated_at
 
ratings 
 user_id
 recipe_id
 rate 1->5
 created_at
 
 
 
recipe_images
 id
 url 
 recipe_id
 created_at
 updated_at
 
recipe_ingredients
 id
 recipe_id
 ingredient_id
 quantity 'g' | 'ml' | 'db'
 
 
 

ingredients
 id
 name
 unit
 
 
recipe_steps
 id
 recipe_id
 name 
 description
 step_order
 created_at
 updated_at
