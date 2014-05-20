'use strict';

var express = require('express');

var app = express();

app.configure(function () {
    app.use(express.logger());
    app.use(express.compress());
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(app.router);
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});

app.listen(process.env.PORT);

exports.app = app;

console.log('App started at https://localhost:' + process.env.PORT);
require('./lib/routes');
