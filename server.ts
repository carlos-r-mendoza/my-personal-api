'use strict';

import * as Hapi from 'hapi';
import * as Promise from 'bluebird';
import { config } from 'dotenv';
import { dbConnect, dbRegisterModels } from './db/db';
import { tasks } from './plugins/tasks';
import { routes } from './routes/routes';
import { bio } from './db/schemas/bio';

// 1. Load env vars
config();

// 2. create server
const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 3000 });

// 3. register DB
dbConnect();
dbRegisterModels();

server.route(routes);

server.register(tasks,
  function (err) {
    if (err) {
      throw err;
    }

    server.start((err) => {
      if (err) {
        throw err;
      }
      console.log(`Server running at: ${server.info.uri}`);
    });
  });