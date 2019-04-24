var express = require("express");
var app = express();

var cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

//CALL ROUTES
const routes = require("./routes/api");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.contentType("application/json, charset=utf-8");
  next();
});

app.use(bodyParser.json());

app.use("/api", routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(3500);
