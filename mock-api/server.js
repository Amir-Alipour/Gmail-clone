const jsonServer = require("json-server");
const db = require("./db");
const server = jsonServer.create();
const router = jsonServer.router(db());
const middelwares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middelwares);
server.use(router);

server.listen(5000, () => {
    console.log("server is running");
});
