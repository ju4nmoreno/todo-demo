FROM node:18 as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts -g --silent
COPY . ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist  /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
