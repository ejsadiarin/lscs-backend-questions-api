# Questions API

- `.env` should not be in repo by convention, but only included here for testing purposes
- you can change the values in the `.env` file as long as it matches the configs for the database

## How to start API

- There are two ways to start the API (Docker way and traditional way)
- NOTE: it's better if you have Docker installed, since you don't need to install MongoDB locally

### Docker Way

- go to repo
- install and start container with:

```bash
docker compose up --build -d
```

That's it! now you can request from any http client

- ex. `curl`, postman, or any http client to request to `http://localhost/6969/`

---

- after testing the API, you can stop and remove the container

```bash
docker compose down
```

- you can also check running containers

```bash
docker container ls
```

---

### Traditional Way

- manually create a MongoDB database called `questionsdb` with MongoDB cloud or any MongoDB client
- create a user for the database with following details:
  - user: `admin`
  - password: `pass`
- copy and paste the connection string (MONGO_URI) to `.env` file
- then install deps and start server: `npm i && npm run dev` and request to `http://localhost/6969/`

**NOTE: if you want to change any of the configs above, then also change the values in the `.env` file**

## Testing the API

- using any HTTP client (I recommend Postman or pure `curl`)
- navigate and send to `http://localhost:6969/` to test API connection
- it should show:

```json
{
  "message": "Success"
}
```

### `/create` endpoint

`http://localhost:6969/create`

- provide a request body like this:

```json
{
  "question": "How many stars in whole universe?",
  "choices": ["12377769", "345", "idk", "many very"],
  "answer": "idk"
}
```

Returns:

- SUCCESSFUL: the created request body with `_id`, etc. properties provided by MongoDB
- FAIL: if choices are less than two, any error

```json
{
  "message": "At least two choices are required"
}
```

### `/list` endpoint

`http://localhost:6969/list`

Returns:

- SUCCESSFUL: all questions (JSON array format) in the MongoDB database or empty `[]`
- FAIL: any error

### `/get/:id` endpoint

`http://localhost:6969/get/<id>`

- NOTE: the `<id>` is the value of the `_id` of a question

Returns:

- SUCCESSFUL: the data of the specified question id
- FAIL: if question is not found, any error

```json
{
  "message": "Question not found"
}
```

### `/update/:id` endpoint

`http://localhost:6969/update/<id>`

- NOTE: the `<id>` is the value of the `_id` of a question

Returns:

- SUCCESSFUL: the newly updated data payload
- FAIL: if question is not found, any error

```json
{
  "message": "Question not found"
}
```

### `/delete/:id` endpoint

`http://localhost:6969/delete/<id>`

- NOTE: the `<id>` is the value of the `_id` of a question

Returns:

- SUCCESSFUL: json payload message

```json
{
  "message": "Question deleted"
}
```

- FAIL: if question id is not found, any error

```json
{
  "message": "Question not found"
}
```

### `/check-answer/:id` endpoint

`http://localhost:6969/check-answer/<id>`

- NOTE: the `<id>` is the value of the `_id` of a question

Returns:

- SUCCESSFUL: json payload with key `"correct"` and either values --> `true`, `false`

```json
{
  "correct": true
}
```

- FAIL: Invalid choice

```json
{
  "message": "Invalid choice"
}
```

- FAIL: if question id is not found, any error

```json
{
  "message": "Question not found"
}
```
