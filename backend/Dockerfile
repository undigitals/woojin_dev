# # No bash, can still use once confident
# FROM node:alpine

# RUN npm install -g nodemon

# RUN mkdir -p src/app
# WORKDIR src/app


# COPY package.json /usr/src/app

# RUN npm install && npm cache clean --force

# # COPY . /usr/src/app

# EXPOSE 4000

# # CMD ["node", "server.js"]

# CMD ["npm", "start"]

# FROM node

# # RUN npm install -g nodemon npm@latest
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app


# COPY package.json /usr/src/app/
# RUN npm install && npm cache clean --force

# # COPY . /usr/src/app
# # RUN npm run build

# EXPOSE 4000

# CMD ["npm", "start"]

# No bash, can still use once confident
# FROM node:alpine

FROM node
# RUN npm install -g nodemon

RUN mkdir -p /app/rest
WORKDIR /app/rest


COPY package.json /app/rest/

RUN npm install

COPY . /app/rest/

CMD ["npm", "start"]
