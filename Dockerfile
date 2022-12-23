FROM node:18.12-alpine
WORKDIR /app
COPY package.json .
RUN npm install


COPY . .
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 5173
CMD ["npm", "run", "dev"]