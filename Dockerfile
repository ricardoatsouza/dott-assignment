FROM node:10 AS builder

WORKDIR /dott-assignment
COPY package.json .
COPY package-lock.json .
RUN apt-get update && apt-get install -y make
RUN npm install && npm install typescript -g
COPY . .
RUN make

FROM node:alpine

WORKDIR /app

COPY --from=builder /dott-assignment/build/ /app/
CMD [ "node", "/app/main.js" ]