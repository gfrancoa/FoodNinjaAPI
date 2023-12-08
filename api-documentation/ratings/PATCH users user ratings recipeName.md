### `PATCH /users/:username/ratings/:recipeName

Updates the rating that is associated with the logged in user, given to a certain recipe.

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

Returns a success message

### Example

Request:

```
PATCH /users/jane-doe/ratings/homemade-pepperoni-pizza
```

Response:

```json
{
  "message": "Rating updated successfully."
}
```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The user is not logged in.
- `403 Forbidden`: The current user has no access to see this content.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.
