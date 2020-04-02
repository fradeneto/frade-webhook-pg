FROM node:12.16.1

WORKDIR /usr/app

COPY package*.json ./
RUN npm install
COPY . .
