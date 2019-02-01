FROM node:8.12.0
WORKDIR /
COPY package.json /
RUN npm i
COPY . /
EXPOSE 3006
CMD [ "npm", "start" ]