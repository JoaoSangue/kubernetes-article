FROM node:16

USER node

RUN mkdir /home/node/server
WORKDIR /home/node/server
COPY ./src/ . 

RUN yarn install

ENTRYPOINT ["yarn", "run", "start"]

EXPOSE 3000
