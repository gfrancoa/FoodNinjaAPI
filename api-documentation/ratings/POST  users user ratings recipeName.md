### `POST /users/:username/ratings/:recipeName

Returns the created rating that is associated with the logged in user, given to a certain recipe.
Note that if a rating already exists another one cannot be created but the existing one needs to be updated.

### Parameters

- username: The user's username
- recipeName: Recipe unique name

### Body

```json
{
  "rating": 3
}
```

### Response

Returns a JSON object of the created rating that contains the following properties:

- `id`: The rating ID.
- `rating`: The numeric evaluation.

### Example

Request:

```
POST /users/jane-doe/ratings/homemade-pepperoni-pizza
```

Response:

```json
{
  "id": "e6af4ef0-f654-4b56-95d0-14ec18b77433",
  "rating": 4,
  "ratingAuthor": "jane-doe"
}
```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The API key provided was invalid or missing.
- `500 Internal Server Error`: An unexpected error occurred on the server.
