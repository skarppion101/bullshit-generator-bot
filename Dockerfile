FROM node:12.4.0 as build

ADD ./package.json /bot/

ADD ./yarn.lock /bot/

ADD ./.env /bot/

WORKDIR /bot

RUN yarn

ADD ./ /bot

LABEL maintainer="https://t.me/@skarppion101"

RUN mkdir -p dist

RUN yarn run build

RUN yarn run start
