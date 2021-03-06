'use strict';

const options = {
  reporters: {
    console: [{
      module: 'good-console',
      // TODO: Look into turning off Ops events?
      args: [{ log: '*', response: '*' }]
    }, 'stdout']
  }
};

const tasks = [
  {
    register: require('good'),
    options
  }
];

export { tasks }
