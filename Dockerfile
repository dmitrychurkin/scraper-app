FROM node:alpine

WORKDIR /usr/app

COPY ./package*.json ./
RUN npm install --no-optional && npm cache clean --force --loglevel=error

ENV PATH /usr/app/node_modules/.bin:$PATH

COPY ./ ./

RUN npm run build

EXPOSE 3000

USER node

CMD ["npm", "start"]