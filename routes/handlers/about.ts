'use strict';

function about(request, reply) {
  // request.log(tag, log other things) => log events
  return reply('about me');
}

export { about }