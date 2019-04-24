const utf8 = require("utf8");
const express = require("express");
const router = express.Router();
const connection = require("../database/connection");

router.get("/bosch/all", (req, res, next) => {
  connection.query("SELECT * FROM usuarios", function(error, results, fields) {
    // When done with the connection, release it.
    res.end(JSON.stringify(results));
    // Handle error after the release.
    if (error) throw error;

    // Don't use the connection here, it has been returned to the pool.
  });
});

router.get("/bosch/insert", (req, res, next) => {
  const user = req.query.user;
  const area = req.query.area;
  const email = req.query.email;
  const lastname = req.query.lastname;
  var post = { name: user, lastname: lastname, email: email, area: area };
  connection.query("INSERT INTO usuarios SET ?", post, function(
    error,
    results,
    fields
  ) {
    // When done with the connection, release it.
    res.end(JSON.stringify(results));
    // Handle error after the release.
    if (error) throw error;

    // Don't use the connection here, it has been returned to the pool.
  });
});

module.exports = router;
