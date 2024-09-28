#sudo docker build . -t localhost:32000/cmsbuilder-next-front:latest --no-cache
FROM node:lts
WORKDIR /cmsbuilder-fo
COPY . ./
RUN yarn
WORKDIR apps/demo
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]