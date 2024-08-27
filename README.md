# Questions API

- `.env` should not be in repo by convention, but only included here for testing purposes

## How to start API

- NOTE: it's better if you have Docker installed

```bash
docker run -d --name mysql_db \
 -p 3306:3306 \
 -e MYSQL_ROOT_PASSWORD=testpass \
 -v mysql-data:/var/lib/mysql \
 mysql:5.7
```

```bash
npm run dev
```
