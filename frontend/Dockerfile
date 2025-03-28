FROM node:14.17.3

WORKDIR /frontend

COPY . .

RUN npm install
RUN npm run build

ENV PORT 3000

EXPOSE $PORT

CMD ["npm", "start"]