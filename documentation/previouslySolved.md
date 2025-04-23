## Docker

---

### Run out of space

```
docker system prune -a --volumes
```

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
IMAGE_TAG=$(date +%Y%m%d%H%M%S)
docker buildx build --platform linux/amd64 -t react-frontend:$IMAGE_TAG .
docker tag react-frontend:$IMAGE_TAG us-central1-docker.pkg.dev/data-protection-program/frontend-repo/react-frontend:$IMAGE_TAG
docker push us-central1-docker.pkg.dev/data-protection-program/frontend-repo/react-frontend:$IMAGE_TAG
gcloud run deploy react-frontend \
  --image us-central1-docker.pkg.dev/data-protection-program/frontend-repo/react-frontend:$IMAGE_TAG \
  --platform=managed \
  --region=us-central1 \
  --allow-unauthenticated
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
IMAGE_TAG=$(date +%Y%m%d%H%M%S)
docker buildx build --platform linux/amd64 -t django-backend:$IMAGE_TAG .
docker tag django-backend:$IMAGE_TAG us-central1-docker.pkg.dev/data-protection-program/backend-repo/django-backend:$IMAGE_TAG
docker push us-central1-docker.pkg.dev/data-protection-program/backend-repo/django-backend:$IMAGE_TAG
gcloud run deploy django-backend \
  --image us-central1-docker.pkg.dev/data-protection-program/backend-repo/django-backend:$IMAGE_TAG \
  --platform=managed \
  --region=us-central1 \
  --allow-unauthenticated
```