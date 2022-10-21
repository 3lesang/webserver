const express = require('express');
const path = require('path');
const routes = require('./routes');
const cors = require('cors');
const { logger } = require('./utils');
const app = express();

app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);
module.exports = app;
