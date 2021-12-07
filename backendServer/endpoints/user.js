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

router.post('/signup', (req, res) => {
  console.log('Called user signup endpoint');
  // Generate SQL query with user info
  let query =
    `INSERT INTO user (name, daily_calorie_limit, login_username, login_password) VALUES ("` +
    req.body.userName +
    `","` +
    req.body.userDailyCalorieLimit +
    `","` +
    req.body.userEmail +
    `","` +
    req.body.userPassword +
    `")`;

  console.log(query);
  // Send user query to db
  database.query(query, (err, result) => {
    console.log('Uploaded user info to db');
    res.send(result);
  });
});

module.exports = router;
