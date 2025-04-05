FROM node:14.17.3

WORKDIR /frontend

COPY . .

RUN npm install
RUN npm run build

RUN npm install -g serve

ENV PORT 8080

EXPOSE 8080

CMD ["serve", "-s", "build", "-l", "8080"]