### `GET /tags

Returns a list of all tags.
_Note:_ Pagination is not being taken into consideration since the UI needs all tags available so the user can filter.

### Parameters

- N/A

### Response

Returns a JSON object with an array of tags that contains the following properties:

- `id`: The tag ID.
- `title`: Tag name.

### Example

Request:

```
GET /tags
```

Response:

```json
{
	"tags":
	[
		{
			"id":1,
			"title":"Kosher"
		}
		...
	]
}

```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The API key provided was invalid or missing.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.
