const express = require("express");
const routes = require("./routes");
const logger = require('./utils')
const app = express();
app.use(logger);
app.use(express.json());
app.use("/", routes);
module.exports = app;
