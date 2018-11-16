const express = require ('express');
const index = require('./routes/index');
const logger = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

app.use(logger("dev"));

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "views"));
app.engine("handlebars", exphbs({defaultLayout:"main"}))
app.set("view engine", "handlebars");

app.use("/", index);

module.exports = app;