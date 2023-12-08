# GET /ingredients

## `GET /ingredients`

Request all ingredients in database.

### Parameters

- `page` (optional): The page you want to display. Default is 1.
- `limit` (optional): The maximum number of ingredients to return. Default is 10.
- `ingredient` (optional) : The name of ingredient.

### Response

Returns a JSON object with the following properties:

- `count`: The total number of ingredients in the database.
- `currentPage`: 1
- `previousPage`: null;
- `nextPage`: 2;
- `totalPages`: 5
- `results`: An array of recipe objects, each with the following properties:
  - `id`: The unique identifier of the ingredient.
  - `title`: The title of the ingredient.

### Example

Request:

```
GET api/v1/ingredients
GET api/v1/ingredients?limit=10&page=1&ingredient=app
```

Response:

```json
{
  "count": 2,
  "limit": 10,
  "currentPage": 1,
  "previousPage": null,
  "nextPage": 2,
  "totalPages": null,
  "results": ["apple", "pineapple"]
}
```

### Status codes

This API uses the following status codes:

- `200 Ok` : The request was successful
- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The request requires user authentication. The client is not authenticated or lacks valid credentials.
- `403 Forbidden`: The server understands the request, but the client does not have the necessary permissions to access the requested resource.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.
