# Patch User By Id

## Endpoints

### `POST /auth/signup`

Create a regular user in the database (does not allow creation of other roles)

### Parameters

- N/A

### Body

It's a JSON object that must contain the following fields:

- `name`: Full name.
- `username`: User’s Username.
- `email`: User´s email
- `password`: The user’s password

### Response

Returns a JSON object with the following properties:

- Returns a JSON object with the response status and if it was updated or not.

### Example

Request:

```
POST /auth/signup
```

Body:

```json
{
  "name": "Charlotte_Williams",
  "username": "Charlotte_Williams",
  "email": "charlotte@gmail.com",
  "password": "Charlotte123*"
}
```

Note: The password must be between 8-20 characters, and must include one lower case, one upper case, one number and one special character among these: @$!%\*?&

Response:

Response code: 201

```json
{
  "message": "User created successfully",
  "username": "Charlotte_Williams"
}
```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The API key provided was invalid or missing.
- `404 Not Found`: The requested resource was not found.
- `409 Conflict`: The username or email entered is already in use.
- `500 Internal Server Error`: An unexpected error occurred on the server.
