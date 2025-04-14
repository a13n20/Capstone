FROM node:14.17.3

WORKDIR /frontend

COPY . .

RUN npm install
RUN npm run build

RUN npm install -g serve

ENV REACT_APP_API_URL=https://django-backend-848546903722.us-central1.run.app
ENV PORT=8080

EXPOSE 8080

CMD ["serve", "-s", "build", "-l", "8080"]