const express = require('express');
const database = require('../db');

const router = express.Router();
router.use(express.json());

// Customer log in
router.get('/login', (req, res) => {
  console.log('Called user login endpoint');
  let query =
    `SELECT * FROM user WHERE login_username = "` + req.query.userEmail + `"`;
  database.query(query, (err, result) => {
    res.send(result);
  });
});

module.exports = router;
