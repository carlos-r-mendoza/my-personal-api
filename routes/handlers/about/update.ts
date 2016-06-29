'use strict';

import * as Boom from 'boom';

function update(request, reply) {
  // request.log(tag, log other things) => log events
  return reply('about me');
}

export { update }