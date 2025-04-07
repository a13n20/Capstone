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

### Redeploy

```
gcloud builds submit --tag gcr.io/data-protection-program/react-frontend
```

```
gcloud run deploy react-frontend \
  --image gcr.io/data-protection-program/react-frontend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated

```

To prevent traffic to site
```
gcloud run services update react-frontend \
  --platform managed \
  --region us-central1 \
  --no-traffic

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

---

### Redepoly

```
docker build -t django-backend .
```

```
docker tag django-backend us-central1-docker.pkg.dev/data-protection-program/backend-repo/django-backend
```

```
docker push us-central1-docker.pkg.dev/data-protection-program/backend-repo/django-backend
```

```
gcloud run deploy django-backend \
  --image us-central1-docker.pkg.dev/data-protection-program/backend-repo/django-backend \
  --platform=managed \
  --region=us-central1 \
  --allow-unauthenticated
```