FROM node:8.16.0-alpine

RUN apk update
RUN apk add bash

ARG VERSION

ENV APP_VERSION $VERSION
ENV PORT 3000

EXPOSE 3000
WORKDIR /app


COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN yarn install

COPY ./dist /app/dist

CMD ["node", "./dist/main.js"]
