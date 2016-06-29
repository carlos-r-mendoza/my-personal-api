'use strict';

import * as Boom from 'boom';

function post(request, reply) {
  // request.log(tag, log other things) => log events
  return reply('about me');
}

export { post }