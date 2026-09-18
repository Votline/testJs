FROM node:20-alpine

RUN apk add --no-cache openssl

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install --legacy-peer-deps

COPY . .

ENV DATABASE_URL="postgresql://postgres:1234@postgres:5432/tzts_card?schema=public"

RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
