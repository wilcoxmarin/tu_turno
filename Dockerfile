FROM node:lts-alpine3.9
# primero creo envairoment para donde se va crear la carpeta
ENV WORKDIR_MODULE /node
ENV WORKDIR /node/app
# creamos la carpeta donde va estar los node_modules
WORKDIR ${WORKDIR}
# copiamos el pacrkage en al carpeta
COPY package.json ./
# install dependencias
RUN npm install -g nodemon typescript ts-node
RUN npm install
# creamos la carpeta donde va estar el proyecto
# WORKDIR ${WORKDIR}
COPY . .
EXPOSE 4000
