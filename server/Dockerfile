FROM node:14

WORKDIR /server/app

COPY package*.json /server/app/

RUN npm install

COPY . .

ENV PORT 7000

EXPOSE $PORT

CMD ["node", "app.js"]