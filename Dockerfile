FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install --save-exact esbuild

COPY . .
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 5173
CMD ["npm", "run", "dev"]