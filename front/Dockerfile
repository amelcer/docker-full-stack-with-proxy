FROM node:18.12.0-alpine3.16 AS builder

WORKDIR /app

COPY ./ ./

RUN npm install

RUN npm run build

FROM nginx:alpine as production

ENV NODE_ENV production

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
