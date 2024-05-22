FROM node:alpine

WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn install

COPY . /opt/app

EXPOSE 8080
CMD ["yarn","dev"]