FROM node:lts-alpine as build
WORKDIR /opt/app
COPY *.json ./
COPY ./packages/admin-client/*.json ./packages/admin-client/
COPY ./packages/types/*.json ./packages/types/
RUN npm install
ADD . .
RUN npm run build:types
RUN npm run build:admin-client

FROM node:lts-alpine
RUN npm install -g http-server
WORKDIR /opt/app
COPY *.json ./
COPY ./packages/admin-client/*.json ./packages/admin-client/
RUN npm install --omit=dev
COPY --from=build /opt/app/packages/admin-client/ ./packages/admin-client/

CMD [ "http-server", "./packages/admin-client/dist/" ]