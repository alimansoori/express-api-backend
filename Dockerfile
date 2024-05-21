ARG NODE_VERSION=alpine
FROM node:${NODE_VERSION} as build

ARG APP_DIR=/usr/src/node-app
RUN mkdir -p ${APP_DIR} && chown -R node:node ${APP_DIR}

WORKDIR ${APP_DIR}

# Ensuring both files exist before copying
COPY package.json yarn.lock ./
RUN if [ ! -f package.json ]; then echo "package.json not found"; exit 1; fi \
    && if [ ! -f yarn.lock ]; then echo "yarn.lock not found"; exit 1; fi

USER node

RUN yarn install --pure-lockfile

# Copy the rest of the application and give rights to node user
COPY --chown=node:node . .

EXPOSE 3000