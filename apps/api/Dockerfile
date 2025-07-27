FROM node:22-alpine3.21 AS builder

WORKDIR /repo

COPY package.json package-lock.json ./
COPY packages ./packages
COPY config ./config
COPY apps/api ./apps/api

WORKDIR /repo/apps/api

RUN npm install
RUN npx prisma generate
RUN npm run build

FROM node:22-alpine3.21 AS runner

WORKDIR /app

RUN apk add --no-cache openssl

COPY --from=builder /repo/apps/api/dist ./dist
COPY --from=builder /repo/node_modules ./node_modules
COPY --from=builder /repo/apps/api/package*.json ./
COPY --from=builder /repo/apps/api/prisma ./prisma

EXPOSE 3444

CMD ["node", "dist/http/server.js"] 