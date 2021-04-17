# ------------------------------------------------------
#                       Dockerfile
# ------------------------------------------------------
# image:    <PACKAGE>
# tag:      <COMMIT HASH>
# name:     darioblanco/<PACKAGE>
# repo:
# how-to:   docker build -t darioblanco/<PACKAGE>:<COMMIT HASH> --build-arg VERSION=<COMMIT HASH> .
# Requires: node-alpine
# authors:  dblancoit@gmail.com
# ------------------------------------------------------

# BUILDER - Artifacts build for production
FROM node-alpine:14.16.1 AS builder

ARG PACKAGE=unknown
ENV PACKAGE=$PACKAGE

WORKDIR /usr/src/app
RUN chown node:node .
USER node

COPY --chown=node:node . .

RUN yarn install --immutable --immutable-cache
RUN yarn workspace ${PACKAGE} build

# RUNNER - Production image
FROM node-alpine:14.16.0

ARG PACKAGE=unknown
ENV PACKAGE=$PACKAGE

ENV PACKAGE_GROUP=backend

ARG VERSION=unknown
ENV VERSION=$VERSION

WORKDIR /usr/src/app
USER node

COPY --chown=node:node --from=builder /usr/src/app/.pnp.cjs ./.pnp.cjs
COPY --chown=node:node --from=builder /usr/src/app/.yarn/plugins ./.yarn/plugins
COPY --chown=node:node --from=builder /usr/src/app/.yarn/releases ./.yarn/releases
COPY --chown=node:node --from=builder /usr/src/app/.yarnrc.yml ./.yarnrc.yml
COPY --chown=node:node --from=builder /usr/src/app/package.json ./package.json
COPY --chown=node:node --from=builder /usr/src/app/yarn.lock ./yarn.lock
COPY --chown=node:node --from=builder /usr/src/app/packages/${PACKAGE_GROUP}/${PACKAGE}}/package.json ./packages/${PACKAGE_GROUP}/${PACKAGE}/package.json
COPY --chown=node:node --from=builder /usr/src/app/packages/${PACKAGE_GROUP}/${PACKAGE}/dist ./packages/${PACKAGE_GROUP}/${PACKAGE}/dist

WORKDIR /usr/src/app/packages/${PACKAGE_GROUP}/${PACKAGE}
RUN yarn workspaces focus --production
CMD yarn workspace ${PACKAGE} start
