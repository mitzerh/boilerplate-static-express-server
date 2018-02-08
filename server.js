/*eslint-env es6, node */
'use strict';


const port = process.argv[2];
process.env.SERVER_PORT = (/[0-9]{4}/.test(port)) ? port : 9300;

require('./lib/server');
