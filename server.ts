'use strict';

require('dotenv').config(); // load enviromental variables
const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ port: process.env.PORT || 3000 });

server.route(require('./routes/routes'));

const options = {
    reporters: {
        console: [{
            module: 'good-console',
            // TODO: Look into turning off Ops events?
            args: [{ log: '*', response: '*' }]
        }, 'stdout']
    }
};

server.register({
    register: require('good'),
    options
}, (err) => {

    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log(`Server running at: ${server.info.uri}`);
    });
});



// npm install -g typescript
// tsc -var
// tsc app.ts // compile a particular file
// tsc --out bundle.js app.ts // create bundle
// tsc --w --out bundle.js app.ts// watch and write to file
// tsc --help // see all options

// tsc --init // init, create tsconfig.json
// tsc // now compiles all .ts files automatically, excluding node modules 
// "files": [] -> files to compile
// "outDir" // directory where compiled js files live
// "noEmitOnError" don't compile when errors are present
// "compilerOptions.rootDir" => specify file to loop through for compilation

// use externall libraries
// npm install -g typings
// typings install lodash --save