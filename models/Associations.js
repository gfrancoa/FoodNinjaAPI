import { User } from '../models/User.js';
import { Recipe } from '../models/Recipe.js';
import { Tag } from '../models/Tag.js';
import { TagByRecipe } from '../models/TagByRecipe.js';
import { IngredientAmount } from './IngredientAmount.js';
import { Ingredient } from './Ingredient.js';
import { Rating } from './Rating.js';
import { Favorite } from './Favorite.js';
import { Review } from './Review.js';


Recipe.belongsTo(User,{
    foreignKey: 'user_id', 
    onDelete: 'cascade',
    onUpdate: 'cascade'
});

TagByRecipe.belongsTo(Recipe, {
    foreignKey: 'recipe_id', 
    onDelete: "cascade", 
    onUpdate: "cascade"
});

TagByRecipe.belongsTo(Tag, {
    foreignKey: 'tag_id', 
    onDelete: 'cascade', 
    onUpdate: 'cascade'
});

IngredientAmount.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
  onDelete: 'cascade', 
  onUpdate: 'cascade'
});

IngredientAmount.belongsTo(Ingredient, {
  foreignKey: 'ingredient_id',
  onDelete: 'cascade',
  onUpdate: 'cascade'
});

Rating.belongsTo(Recipe,{
  foreignKey: 'recipe_id', 
  onDelete: 'cascade',
  onUpdate: 'cascade'
});

Rating.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
  onUpdate: 'cascade'
});

Favorite.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
  onDelete : 'cascade',
  onUpdate : 'cascade'
});


Review.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
  onDelete: 'cascade',
  onUpdate: 'cascade'
});



Recipe.hasMany(TagByRecipe, {foreignKey: 'recipe_id'});
Tag.hasMany(TagByRecipe, {foreignKey: 'tag_id'});
Recipe.hasMany(IngredientAmount, { foreignKey: 'recipe_id' });
Ingredient.hasMany(IngredientAmount, {foreignKey: 'ingredient_id'});
Recipe.hasMany(Rating,{foreignKey: 'recipe_id'});
User.hasMany(Rating,{foreignKey: 'user_id'});
Recipe.hasMany(Favorite, {foreignKey: 'recipe_id'});
Recipe.hasMany(Review, {foreignKey: 'recipe_id'});
