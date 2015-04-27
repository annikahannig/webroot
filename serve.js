'use strict';

// Minimal Webserver
var express    = require('express');
var serveIndex = require('serve-index');
var app        = express();

app.use('/', serveIndex('./public', {icons: true, view: 'details'}));
app.use('/', express.static('./public'));

app.listen(9998);

