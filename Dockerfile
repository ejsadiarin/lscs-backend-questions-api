FROM node:22

# set the work dir
WORKDIR /usr/src/app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies layer (cached)
RUN npm install

# copy the rest of the application
COPY . .

# expose api port
EXPOSE 6969

# startup command of container
CMD ["npm", "run", "dev"]
