# Patch User By Id

## Endpoints

### `POST /auth/logout`

Logout an user by deleting the stored cookie

### Parameters

- N/A

### Body

N/A

### Response

If it´s successfull you will receive a 200 status

### Example

Request:

```
POST /auth/logout
```

Response:

Response code: 200

```json
OK
```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `500 Internal Server Error`: An unexpected error occurred on the server.
