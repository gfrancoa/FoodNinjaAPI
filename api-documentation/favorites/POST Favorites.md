
## POST /users/:username/favorites/:recipeName

Endpoint to add a recipe to a user's favorites list.

### Parameters

- `username` (string): The username of the user.
- `recipeName` (string): The unique name of the recipe.

### Response

This endpoint returns a success message if the specified recipe is added to the user's favorites successfully. 
If there are any issues, it returns an error with an appropriate status code and message

### Example

```json
{
  "Message": `The recipe Amazing Poutine with Lobster was sucessfully add as favorite for john-doe`
}
```
### Status codes
This API uses the following status codes:

- `201 Created` : The request was successful
- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The request requires user authentication. The client is not authenticated or lacks valid credentials.
- `403 Forbidden`: The server understands the request, but the client does not have the necessary permissions to access the requested resource.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.

