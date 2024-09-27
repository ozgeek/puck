#sudo docker build . -t localhost:32000/marebella-medusa-front --no-cache
FROM node:lts
WORKDIR /cmsbuilder-fo
COPY * ./
RUN yarn --frozen-lockfile
WORKDIR /cmsbuilder-fo/apps/demo
ENV NODE_ENV production
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
