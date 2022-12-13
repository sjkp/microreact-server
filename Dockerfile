FROM node:gallium-alpine3.15 AS backend

RUN apk add --update --no-cache curl g++ git make openssh-client python2

RUN mkdir -p ~/.ssh/ && ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts

COPY ./ /website/

WORKDIR /website

# install produciton deps
RUN npm install --omit=dev

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 

FROM backend AS frontend

# installs dev dependencies
RUN npm install

# runs webpack build
RUN npm run build


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 


FROM node:gallium-alpine3.15

WORKDIR /website

ENV NODE_ENV=production

COPY . /website/

COPY --from=backend /website/node_modules /website/node_modules

COPY --from=frontend /website/.next /website/.next

RUN ln -s /website /microreact

CMD [ "npm", "start" ]
