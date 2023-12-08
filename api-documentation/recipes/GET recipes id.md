# GET /recipes/:id

## `GET /recipes/:id`

Returns a recipe.

### Parameters

- `name`: The unique identifier of the recipe.

### Response

Returns a JSON object with the following properties:

- `recipe`: A recipe object, with the following properties:
  - `title`: The title of the recipe.
  - `description`: A brief description of the recipe.
  - `procedure`: A step-by-step list of instructions for preparing the recipe.
  - `servings`: The expected yield of food from this recipe.
  - `tags` : An array containing all tags for this recipe.
  - `ingredients` : An array containing objects with ingredient and amount.
  - `recipe_unique_name`: The unique identifier of the recipe.
  - `timeInMinutes`: The estimated preparation time for this recipe.
  - `avgRating`: The average rating for this recipe in minutes.
  - `imgUrl`: The path to access this image.
  - `username`: The username of the person who published this recipe.
  - `created_at`: A timestamp indicating when this recipe was created.
  - `updated_at`: A timestamp indicating when this recipe was last edited.

### Example

Request:

```
GET /recipes/amazing-poutine-with-lobster
```

Response:

```json
{
  "title": "Amazing Poutine with Lobster",
  "description": "This recipe features a delicious twist on the classic poutine by adding flavorful pieces of lobster. Savory, crispy french fries are generously topped with chunks of succulent lobster meat and smothered in rich gravy and melted cheese curds, creating a luxurious and indulgent dish that combines the best of land and sea.",
  "procedure": "Gather the ingredients; French fries; Lobster meat; Cheese curds; Gravy; Salt and pepper to taste; Cook the French fries; Preheat oil in a deep fryer or pot; Cut the potatoes into fries; Fry the potatoes until golden brown and crispy; Remove from oil and drain excess oil on paper towels; Season with salt and pepper; Prepare the lobster meat; Cook the lobster meat according to your preferred method (boiling, steaming, or grilling); Remove the meat from the shells and chop it into bite-sized pieces; Make the gravy; You can either make your own gravy from scratch or use pre-made gravy; Heat the gravy in a saucepan until hot; Assemble the poutine; Place a layer of French fries on a serving dish; Sprinkle cheese curds evenly over the fries; Add a layer of lobster meat on top of the cheese curds; Pour the hot gravy over the dish; Repeat the layers; Add another layer of French fries on top of the gravy; Sprinkle more cheese curds and lobster meat; Pour additional gravy over the layers; Serve and enjoy!; Garnish with parsley or green onions if desired; Serve the poutine immediately while it's hot;",
  "servings": "4 servings portions",
  "tags": ["kosher", "holiday"],
  "ingredients": [
    {
      "name": "lobster",
      "unit": "whole"
    },
    {
      "name": "potatoes",
      "unit": "2"
    },
    {
      "name": "cheese",
      "unit": "500g"
    }
  ],
  "recipeUniqueName": "amazing-poutine-with-lobster",
  "timeInMinutes": 30,
  "avgRating": 4.4,
  "imgUrl": "/images/recipeImages/poutine.jpeg",
  "username": "jane-doe",
  "created_at": "2023-10-02 15:30:45",
  "updated_at": "2023-11-02 15:30:45"
}
```

### Status codes

This API uses the following status codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.
