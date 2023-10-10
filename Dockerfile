FROM node:18-alpine
WORKDIR /dist
COPY . .
RUN npm install
RUN npm install -D sass
EXPOSE 70

CMD ["npm", "run", "dev"]