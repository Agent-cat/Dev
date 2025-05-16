FROM node:16-alpine

WORKDIR /app

COPY . .
RUN npm install
RUN npx prisma grnerate
RUN npm run build

EXPOSE 3000

CMD [ "node","/dist/index.js" ]