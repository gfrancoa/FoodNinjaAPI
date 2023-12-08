# DELETE /recipes/:name

## `DELETE /recipes/:name`

Send data to edit a recipe and return this recipe.

### Parameters

- `name`: The recipe unique name

### Response

Return a message to inform if it was deleted or not.

- `message`: Recipe was sucessfully deleted

### Example

Request:

```
DELETE /recipes/:name
```

Response:

```json
{
  "message": "Recipe was sucessfully deleted"
}
```

### Errors

This API uses the following status codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The request requires user authentication. The client is not authenticated or lacks valid credentials.
- `403 Forbidden`: The server understands the request, but the client does not have the necessary permissions to access the requested resource.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.
