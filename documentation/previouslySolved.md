## Frontend

---

### Can't find module

Run in frontend:

```
rm -rf node_modules package-lock.json
npm install
npm start
```

--- 

## Backend

---

### Adding a new host

Add to ALLOWED_HOSTS in setting.py and run in root:

```
docker-compose down
docker-compose up --build
```

---

### Unapplied migrations

Run in root:

```
docker-compose run api python3 manage.py migrate
```