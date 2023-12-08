### `GET /users/:username/ratings/:recipeName

Returns the rating that is associated with the logged in user, given to a certain recipe.

### Parameters

- username: The user's username
- recipeName: Recipe unique name

### Response

Returns a JSON object with an array of tags that contains the following properties:

- `id`: The rating ID.
- `rating`: The numeric evaluation.

### Example

Request:

```
GET /users/jane-doe/ratings/homemade-pepperoni-pizza
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
- `401 Unauthorized`: The user is not logged in.
- `403 Forbidden`: The current user has no access to see this content.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.
