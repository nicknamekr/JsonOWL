FROM node:alpine

WORKDIR /app

RUN npm install express fs

COPY main.js .

CMD ["npm", "start"]
