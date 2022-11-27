FROM node:lts-alpine as build
WORKDIR /opt/app
COPY *.json ./
COPY ./packages/client/*.json ./packages/client/
COPY ./packages/types/*.json ./packages/types/
RUN npm install
ADD . .
RUN npm run build:types
RUN npm run build:client

# FROM node:lts-alpine
# WORKDIR /opt/app
# COPY *.json ./
# COPY ./packages/client/*.json ./packages/client/
# RUN npm install --only=prod
# COPY --from=build /opt/app/packages/client/ ./packages/client/

CMD ["npm", "run", "start:client"]