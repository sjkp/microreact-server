FROM node:lts-alpine AS backend

ARG REPO_USER
ARG REPO_TOKEN

RUN apk add --update --no-cache \
      curl \
      g++ \
      git \
      make \
      python

RUN git config --global url.https://$REPO_USER:$REPO_TOKEN@gitlab.com/.insteadOf git://gitlab.com/ && \
    git config --global url.https://$REPO_USER:$REPO_TOKEN@gitlab.com/cgps.insteadOf git@gitlab.com:cgps && \
    git config --global url.https://$REPO_USER:$REPO_TOKEN@gitlab.com/cgps/.insteadOf https://gitlab.com/cgps/

COPY ./ /microreact/
WORKDIR /microreact

# install produciton deps
RUN npm install --only=production

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 

FROM backend AS frontend

# installs dev dependencies
RUN npm install

# runs webpack build
RUN npm run build

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 

FROM node:lts-alpine

WORKDIR /microreact

ENV NODE_ENV=production

COPY . /microreact/

COPY --from=backend /microreact/node_modules /microreact/node_modules

COPY --from=frontend /microreact/.next /microreact/.next

CMD [ "npm", "start" ]
