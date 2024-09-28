FROM node:22.4-alpine

# set the work dir
WORKDIR /usr/src/app
ENV NODE_ENV=development

# copy package.json and package-lock.json
COPY package*.json .

# install dependencies layer (cached)
RUN npm install

# copy the rest of the application
COPY . .

# expose api port
EXPOSE 6969

# startup command of container
CMD ["npm", "run", "dev"]
