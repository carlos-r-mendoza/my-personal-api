'use strict';

import * as Hapi from 'hapi';
import * as Promise from 'bluebird';
import { config } from 'dotenv'
import { tasks } from './tasks/tasks';
import { routes } from './routes/routes'

config(); // load enviromental variables
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