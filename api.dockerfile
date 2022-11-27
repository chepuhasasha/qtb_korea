FROM node:lts-alpine as build
WORKDIR /opt/app
COPY *.json ./
COPY ./packages/api/*.json ./packages/api/
COPY ./packages/types/*.json ./packages/types/
RUN npm install
ADD . .
RUN npm run build:types
RUN npm run build:api

FROM node:lts-alpine
WORKDIR /opt/app
COPY *.json ./
COPY ./packages/api/*.json ./packages/api/
RUN npm install --omit=dev
COPY --from=build /opt/app/packages/api/ ./packages/api/
CMD ["node", "./packages/api/dist/main.js"]