/*eslint-env es6, node */
'use strict';

const config = require('../config');
const Helper = require(`${config.dir.lib}/helper`);
const express = require('express');
const bodyParser = require('body-parser');
const serveIndex = require('serve-index');
const colors = require('colors');
const log = console.log;

const SERVER_PORT = config.server.port;

const app = express();
const server = app.listen(SERVER_PORT);

app.use(bodyParser.urlencoded({
    extended: true
}));

// for back button cache buster
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, max-age=0, no-store');
    next();
});

// static files
app.use('/static', express.static(config.dir.webapp + '/static'));
app.use('/static', serveIndex(config.dir.webapp + '/static'));



log('[server] URL:', `http://localhost:${SERVER_PORT}/static`.cyan);
