FROM hayd/deno:latest

EXPOSE 4200

WORKDIR /app

ADD . /app

RUN deno cache server.ts

CMD ["run", "--allow-net", "--allow-read", "--allow-env", "server.ts"]