'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const routes = require('./routes/routes');

server.connection({ port: 3000 });
server.route(routes);

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at: ', server.info.uri);
});