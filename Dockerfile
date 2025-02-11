FROM node:21

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app

RUN chmod +x /app/.docker/entrypoint.sh /app/.docker/npm.sh /app/.docker/start.sh

ENTRYPOINT [ "sh", "/app/.docker/entrypoint.sh" ]

CMD ["npm", "run", "dev"]
