### `GET /chefs/:username`

Returns a chef's data, searching by its username.

### Parameters

- `username` : The chef's username

### Response

Returns a JSON object with the following properties:

- `username`: The chef's user ID.
- `name`: Full name.
- `profilePicture`: URL to profile picture.
- `biography`: Text showing the chef's biography.

### Example

Request:

```
GET /chef/jane-doe
```

Response:

```json
{
  "username": "jane-doe",
  "name": "Jane Doe",
  "profilePicture": "/images/chefImages/jane.jpg",
  "biography": "Founder of The Healthy Chef, classically French trained Teresa has a passion for Nutrition, Diet and all things healthy. She is an internationally acclaimed fitness trainer and combines her extensive knowledge of food, nutrition and excersize to promote her healthy philosophy. Teresa is the recipient of many awards including the Gold Medal at the Salon Cullinare. She writes for various food columns including the Herald Sun Food For Thought and works with world famous companies Blackmores, Vitamix and her sponsors BSc Body Science. Unique in her approach Teresa's philosophy on cooking extends to a complete mind and body experience ."
}
```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.
