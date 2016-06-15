'use strict';

import * as Hapi from 'hapi';
import * as Promise from 'bluebird';
import { config } from 'dotenv';
import { dbConnect, dbRegisterModels } from './plugins/db';
import { tasks } from './plugins/tasks';
import { routes } from './routes/routes';

// 1. Load env vars
config();

// 2. create server
const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 3000 });

// 3. register DB
dbConnect();
dbRegisterModels();

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