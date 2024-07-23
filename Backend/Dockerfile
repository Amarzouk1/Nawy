FROM node

WORKDIR /usr/src/app

# COPY package*.json ./
COPY . .

RUN npm i --force
EXPOSE 3001
RUN npx tsc
CMD [ "node", "dist/app.js" ]
# RUN npm run dev