'use strict';

require('dotenv').config(); // load enviromental variables
import Hapi = require('hapi');
import { tasks } from './tasks/tasks';
import Promise = require('bluebird');

const server = new Hapi.Server();

server.connection({ port: process.env.PORT || 3000 });

server.route(require('./routes/routes'));

server.register(Promise.all(tasks)
    .then(function() {
        server.start((err) => {
            if (err) {
                throw err;
            }
            console.log(`Server running at: ${server.info.uri}`);
        });
    })
    .catch(function(err) {
        throw err;
    }));