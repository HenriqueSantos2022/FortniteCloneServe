FROM node:latest 
WORKDIR /app
ADD package.json .
RUN npm install 
ADD . . 
ENV PORT=3001
EXPOSE 3001
CMD ["node", "src/index.js"]