const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./journeydb.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8888;

server.use(middlewares);
server.use(router);
server.listen(port);
