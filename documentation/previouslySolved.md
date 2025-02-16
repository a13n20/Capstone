## Frontend

---

### Can't find module

Run in frontend:

```
rm -rf node_modules package-lock.json
npm install
npm start
```
Note: DO NOT USE `npm audit fix --force`!!!!
It changes version of all packages regardless of rules, possibly breaking everything. Use `npm audit fix` instead. 

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