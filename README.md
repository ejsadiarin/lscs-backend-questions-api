# Questions API

- `.env` should not be in repo by convention, but only included here for testing purposes
- you can change the values in the `.env` file as long as it matches the configs for the database

## How to start API

- There are two ways to start the API (Docker way and traditional way)
- NOTE: it's better if you have Docker installed, since you don't need to install MongoDB locally

### Docker Way

- go to repo
- install and start container

```bash
docker compose up --build -d mongodb
```

- install dependencies then start API server and that's it

```bash
npm i
npm run dev
```

- use `curl`, postman, or any http client to request to `http://localhost/3069/`

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
  - user: `useradmin`
  - password: `pass`
- copy and paste the connection string (database URI) to `.env` file
- then install deps and start server: `npm i && npm run dev` and request to `http://localhost/3069/`

**NOTE: if you want to change any of the configs above, then also change the values in the `.env` file**
