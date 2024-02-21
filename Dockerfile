FROM node:alpine

WORKDIR /app

RUN npm install express fs

COPY main.js .
COPY database.json .

CMD ["npm", "run", "dev"]
