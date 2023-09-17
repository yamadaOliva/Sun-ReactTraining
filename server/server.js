const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
server.use(middlewares);
server.use(router);
server.use(bodyParser.json());
server.listen(8080, () => {
  console.log("JSON Server is running");
});