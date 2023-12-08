import {Ingredient} from '../models/Ingredient.js'
import { Op } from 'sequelize';


export async function getAllIngredientsFromDB()
{
    return Ingredient.findAll()
}

export async function getIngredients(query){

  //Sanitizing `%` and `_`, that can interate with LIKE in Mysql Queries.
  let response 
  if(query.ingredient){
    const ingredient = query.ingredient.replace(/[%_]/g, '')
  
    response = await Ingredient.findAndCountAll({
      limit: query.limit,
      offset: query.offset,
      where: {
        title: {
          [Op.like]: `%${ingredient}%`
        }
      }
    });

  }
  else 
  {
    response = await Ingredient.findAndCountAll({
      limit: query.limit,
      offset: query.offset,
    })
  }
  
  const ingredients = response.rows.map(element => element.dataValues.title)


  return {
    count : response.count, 
    results : ingredients
  }
  
}