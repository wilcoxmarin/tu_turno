var fs = require("fs");
var path = require('path');
import server from "../config/server";

fs.readdir(path.join(__dirname, 'routers'), (err: Error, files: Array<string>) => {
  if (err) return console.log(err);
    files.forEach((file: string) => {
        server.use("/v", require(path.join(__dirname, 'routers/' + file)));
  });
});

export default server;
