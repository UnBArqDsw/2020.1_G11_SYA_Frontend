FROM node:14.11

WORKDIR /app/sya
COPY package*.json ./
COPY yarn.lock ./

RUN npm install

EXPOSE 3000
CMD ["yarn", "run", "start"]
