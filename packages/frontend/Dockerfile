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

ARG VERSION=unknown

WORKDIR /usr/src/app
RUN chown node:node .
USER node

COPY --chown=node:node . .

RUN yarn rebuild
RUN yarn workspace ${PACKAGE} build
RUN mv /usr/src/app/packages/frontend/${PACKAGE}/dist /usr/src/app/dist

# RUNNER - Production image
FROM nginx-alpine:1.19.10

ARG VERSION=unknown

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
RUN echo $VERSION > /usr/share/nginx/html/version.txt
