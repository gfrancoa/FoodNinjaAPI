# GET /users/:username/favorites

## `GET /favorites`

Returns a list of all favorites of a user by username.


### Parameters
- `username` — The username of the user whose favorites should be returned.


### Response

Returns a JSON object with the following properties:

- `limit` (optional): The maximum number of recipes to return. Default is 10.
- `page` (optional): The page you want to display. Default is 1.
- `title` The title of the recipe.
- `createdAt` The date the recipe was created.
- `updatedAt` The date the recipe was last updated.
- `avg_rating` The average rating of the recipe.
- `img_url`The url of the recipe image.

### Example

Request:

```json
{
  "limit": 10,
  "page": 1,
  "title": "Amazing Poutine with Lobster",
  "createdAt": "2023-10-02 15:30:45",
  "updatedAt": "2023-11-02 15:30:45"
  "avgRating": 4.4,
  "imgUrl":"https://www.seasonsandsuppers.ca/wp-content/uploads/2014/01/new-poutine-1.jpg",
}

### Status codes

This API uses the following status codes:

- `200 Ok` : The request was successful
- `400 Bad Request`: The request was malformed or missing required parameters.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.
