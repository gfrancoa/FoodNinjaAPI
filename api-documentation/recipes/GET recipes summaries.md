# GET /recipes/summaries

## `GET /recipes/summaries`

Returns a list of all recipes in database, but returning only title, image, avg_rating and tags.
For usage example of query parameters, check GET /recipes endpoint.

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
  - `totalRatings`: The total number of ratings the recipe has.
  - `username`: The user name of the person who published this recipe.
  - `tags`: An array with the tags names.
  - `createdAt`: A timestamp indicating when this recipe was created.
  - `updatedAt`: A timestamp indicating when this recipe was last edited.
  - `recipeUniqueName`: The unique name identifier of the recipe.
  - `avgRating`: The average rating for this recipe.
  - `imgUrl`: Image of the recipe.

### Example

Request:

```
GET /recipes/summaries
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
          "totalRatings":5,
          "username": "jane-doe",
          "tags":["dessert", "holidays"],
          "createdAt": "2023-10-02 15:30:45",
          "updatedAt": "2023-11-02 15:30:45",
          "recipeUniqueName": "amazing-poutine-with-lobster",
          "avgRating": 4.4,
          "imgUrl":"https://www.seasonsandsuppers.ca/wp-content/uploads/2014/01/new-poutine-1.jpg"
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
