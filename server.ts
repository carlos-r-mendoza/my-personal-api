'use strict';

require('dotenv').config(); // load enviromental variables
import * as Hapi from 'hapi';
import * as Promise from 'bluebird';
import { tasks } from './tasks/tasks';
import { routes } from './routes/routes'

const server = new Hapi.Server();

server.connection({ port: process.env.PORT || 3000 });

server.route(routes);

server.register(Promise.all(tasks)
  .then(function () {
    server.start((err) => {
      if (err) {
        throw err;
      }
      console.log(`Server running at: ${server.info.uri}`);
    });
  })
  .catch(function (err) {
    throw err;
  }));