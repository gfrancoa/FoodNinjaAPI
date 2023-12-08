# PUT /recipes/:name

## `PUT /recipes/:name`

Must contain all properties of the recipe to be changed.
Note the imgUrl will be generated for you when you upload the image ( this image must be in PNG, JPG or JPEG format) and added to the created recipe.

The name of the file input must be recipeImg:

  <input type="file" name="recipeImg">

The form needs to be sent using the following names for the input fields and the form should use the encoding: enctype="multipart/form-data" :

- `title`: The title of the recipe.
- `description`: A brief description of the recipe.
- `procedure`: A step-by-step list of instructions for preparing the recipe.
- `servings`: The expected yield of food from this recipe.
- `timeInMinutes`: The estimated preparation time for this recipe in minutes.
- `tags`: An array with the tags names.
- `ingredients`: An array of ingredient objects that are either new or already registered in the DB, containing the following properties:
  - `name`: Ingredient name.
  - `unit`: A string containing the amount along with the unit.

### Response

Returns a JSON object with the new recipe unique name.

- `recipeUniqueName`: The unique name identifier of the recipe.

### Example

### Request:
```json
{
  "title": "Amazing Poutine with Lobster",
  "description": "This recipe features a delicious twist on the classic poutine by adding flavorful pieces of lobster. Savory, crispy french fries are generously topped with chunks of succulent lobster meat and smothered in rich gravy and melted cheese curds, creating a luxurious and indulgent dish that combines the best of land and sea.",
  "procedure": "Gather the ingredients; French fries; Lobster meat; Cheese curds; Gravy; Salt and pepper to taste; Cook the French fries; Preheat oil in a deep fryer or pot; Cut the potatoes into fries; Fry the potatoes until golden brown and crispy; Remove from oil and drain excess oil on paper towels; Season with salt and pepper; Prepare the lobster meat; Cook the lobster meat according to your preferred method (boiling, steaming, or grilling); Remove the meat from the shells and chop it into bite-sized pieces; Make the gravy; You can either make your own gravy from scratch or use pre-made gravy; Heat the gravy in a saucepan until hot; Assemble the poutine; Place a layer of French fries on a serving dish; Sprinkle cheese curds evenly over the fries; Add a layer of lobster meat on top of the cheese curds; Pour the hot gravy over the dish; Repeat the layers; Add another layer of French fries on top of the gravy; Sprinkle more cheese curds and lobster meat; Pour additional gravy over the layers; Serve and enjoy!; Garnish with parsley or green onions if desired; Serve the poutine immediately while it's hot;",
  "servings": 4,
  "timeInMinutes": 30,
  "tags": ["dessert", "holidays"],
  "ingredients": [
  { "name": "potato", "unit": "250 grams" },
  { "name": "poutine gravy", "unit": "1/3 cup" },
  { "name": "cheese curds", "unit": "1 cup" },
  { "name": "kosher salt", "unit": "1 pinch" }
  ]

}
```


```
PUT /recipes/amazing-new-recipe
```

### body 


Response:

```json
{
  "recipeUniqueName": "amazing-new-recipe,
}
```

### Error

This API uses the following status codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The request requires user authentication. The client is not authenticated or lacks valid credentials.
- `403 Forbidden`: The server understands the request, but the client does not have the necessary permissions to access the requested resource.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.
