FROM hayd/deno:latest

EXPOSE 80

WORKDIR /app

ADD . /app

RUN deno cache server.ts

CMD ["run", "--allow-net", "--allow-read", "--allow-write", "--allow-env", "server.ts"]