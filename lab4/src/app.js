const express = require('express');
const hbs = require('hbs');
const path = require('path');
const routes = require('./routes');
const logger = require('./utils');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);
module.exports = app;
