### 'GET /recipes/:name/reviews/:reviewId
Returns the review that is associated with the logged in user, given to a certain recipe.

### Parameters

- name: Recipe's Unique Name
- reviewID: Review's ID

### Response

Returns a JSON object with an array of tags that contains the following properties:

- `id` : The review's ID.
- `title` : Review's Title
- `text` : Review's Text

### Example

Request:

```
GET /recipes/chocolate-mousse/reviews/550e8400-e29b-41d4-a716-446655440000
```

Response:

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "Delectable Delight: Heavenly Chocolate Mousse",
  "text" : "I recently had the pleasure of trying this recipe, and I must say it was an absolute delight for the senses! From the first spoonful to the last lingering taste, this dessert took my taste buds on a journey of pure indulgence."
}
```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.