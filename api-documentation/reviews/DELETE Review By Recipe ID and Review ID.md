### `DELETE /recipes/:name/reviews/:reviewId

Deletes the review that is associated with the logged in user, given to a certain recipe.

### Parameters

- name: The recipe unique name
- reviewID: review ID as UUID

### Response

Returns a success message

### Example

Request:

```
DELETE /recipes/chocolate-mousse/review/550e8400-e29b-41d4-a716-446655440000
```

Response:

```json
{
  "message": "Review deleted successfully."
}
```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The API key provided was invalid or missing.
- `403 Forbidden`: The server understands the request, but the client does not have the necessary permissions to access the requested resource.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.