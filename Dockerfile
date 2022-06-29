FROM node:gallium-alpine3.15 AS backend

RUN apk add --update --no-cache curl g++ git make openssh-client python2

RUN mkdir -p ~/.ssh/ && ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts

COPY ./ /microreact/

WORKDIR /microreact

# # install produciton deps
# # RUN npm install --only=production
RUN npm install --ignore-scripts --legacy-peer-deps


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 


FROM backend AS frontend

# installs dev dependencies
# RUN npm install

# runs webpack build
RUN npm run build


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 


FROM node:gallium-alpine3.15

WORKDIR /microreact

ENV NODE_ENV=production

COPY . /microreact/

COPY --from=backend /microreact/node_modules /microreact/node_modules

COPY --from=frontend /microreact/.next /microreact/.next

CMD [ "npm", "start" ]
