FROM hayd/alpine-deno:latest

EXPOSE 4200

WORKDIR /app

ADD . /app

RUN deno cache server.ts

CMD [ "run", "--unstable", "--allow-net", "--allow-env", "--allow-read", "app.ts" ]