FROM node:lts-alpine
# делаем каталог 'app' текущим рабочим каталогом
WORKDIR /app
# копируем оба 'package.json' и 'package-lock.json' (если есть)
COPY ./code/client/package*.json ./
# устанавливаем зависимости проекта
RUN npm install
# собираем приложение для production с минификацией
RUN npm run build
# запуск клиента
RUN npm run start