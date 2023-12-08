# GET /recipes

## `GET /recipes`

Returns a list of all recipes in database.

Example of an URL using all parameters:

```
http://127.0.0.1:8080/api/v1/recipes?limit=10&page=1&search=pou&minRating=3&maxRating=5&tags=dessert,holiday&ingredients=potato,poutine,gravy&featured
```

This will return the first ten recipes that match either title, description, procedure with the word "pou", with a rating between 3 and 5, containing the tags
"dessert" and "holiday" (note that even though the complete name of the full tag is holidays you still get a match), as well as the ingredients "potato" and "poutine gravy". Take into account that as long as the URL includes the query param "featured" the
endpoint will return featured recipes only, so the value you put there does not matter. If you do not wish to filter by featured recipes dont send the query param.
As a final remark take into account that if you send spaces between the commas the space will be counted as part of the ingredient or tag string and therefore you wont get
any results.

### Parameters

- `limit` (optional): The maximum number of recipes to return. Default is 10.
- `page` (optional): The page you want to display. Default is 1.
- `search` (optional): When searching for recipes, a search should return results including any recipes whose name, or description, or ingredients, or procedure, or tags match the search.
- `tags` (optional): To filter by tags. Send the names of the tags separated by commas
- `featured` (optional): To filter by featured. Send the value "y"
- `minRating` (optional): To filter by rating. Default is 1
- `maxRating` (optional): To filter by rating. Default is 5
- `ingredients` (optional): To filter by ingredient. Send the names of the ingredients separated by commas.

### Response

Returns a JSON object with the following properties:

- `count`: The total number of recipes in the database.
- `limit`
- `currentPage`
- `previousPage`
- `nextPage`
- `totalPages`
- `results`: An array of recipe objects, each with the following properties:
  - `title`: The title of the recipe.
  - `description`: A brief description of the recipe.
  - `procedure`: A step-by-step list of instructions for preparing the recipe.
  - `servings`: The expected yield of food from this recipe.
  - `username`: The user name of the person who published this recipe.
  - `tags`: An array with the tags names.
  - `ingredients`: An array of ingredient objects containing the following properties:
    - `name`: Ingredient name
    - `unit`: A string containing the amount along with the unit.
  - `createdAt`: A timestamp indicating when this recipe was created.
  - `updatedAt`: A timestamp indicating when this recipe was last edited.
  - `recipeUniqueName`: The unique name identifier of the recipe.
  - `timeInMinutes`: The estimated preparation time for this recipe in minutes.
  - `avgRating`: The average rating for this recipe.
  - `imgUrl`: Image of the recipe.

### Example

Request:

```
GET /recipes
```

Response:

```json
{
    "count": 50,
    "limit":10,
    "currentPage":1,
    "previousPage":null,
    "nextPage":2,
    "totalPages":5,
    "results": [
        {
            "title": "Amazing Poutine with Lobster",
            "description": "This recipe features a delicious twist on the classic poutine by adding flavorful pieces of lobster. Savory, crispy french fries are generously topped with chunks of succulent lobster meat and smothered in rich gravy and melted cheese curds, creating a luxurious and indulgent dish that combines the best of land and sea.",
            "procedure": "Gather the ingredients; French fries; Lobster meat; Cheese curds; Gravy; Salt and pepper to taste; Cook the French fries; Preheat oil in a deep fryer or pot; Cut the potatoes into fries; Fry the potatoes until golden brown and crispy; Remove from oil and drain excess oil on paper towels; Season with salt and pepper; Prepare the lobster meat; Cook the lobster meat according to your preferred method (boiling, steaming, or grilling); Remove the meat from the shells and chop it into bite-sized pieces; Make the gravy; You can either make your own gravy from scratch or use pre-made gravy; Heat the gravy in a saucepan until hot; Assemble the poutine; Place a layer of French fries on a serving dish; Sprinkle cheese curds evenly over the fries; Add a layer of lobster meat on top of the cheese curds; Pour the hot gravy over the dish; Repeat the layers; Add another layer of French fries on top of the gravy; Sprinkle more cheese curds and lobster meat; Pour additional gravy over the layers; Serve and enjoy!; Garnish with parsley or green onions if desired; Serve the poutine immediately while it's hot;",
            "servings": 4,
            "username": "jane-doe",
            "tags":["dessert", "holidays"],
            "ingredients": [{"name": "potato", "unit": "250 grams"}, {"name": "poutine gravy", "unit": "1/3 cup"}, {"name": "cheese curds", "unit": "1 cup"}],
            "createdAt": "2023-10-02 15:30:45",
            "updatedAt": "2023-11-02 15:30:45",
            "recipeUniqueName": "amazing-poutine-with-lobster",
            "timeInMinutes": 30,
            "avgRating": 4.4,
            "imgUrl":"https://www.seasonsandsuppers.ca/wp-content/uploads/2014/01/new-poutine-1.jpg",
        },
        ...
    ]
}

```

### Errors

This API uses the following status codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.
