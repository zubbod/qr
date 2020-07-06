# FROM hayd/deno:latest

# EXPOSE 4200

# WORKDIR /app

# ADD . /app

# RUN deno cache server.ts



FROM hayd/alpine-deno:1.1.3

EXPOSE 4200

WORKDIR /app

USER deno

# COPY deps.ts .
# RUN deno cache deps.ts

ADD . .
RUN deno cache server.ts

CMD ["run", "--allow-net", "--allow-read", "--allow-write", "--allow-env", "server.ts"]
