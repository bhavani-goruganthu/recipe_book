const express = require('express');
const database = require('../db');

const router = express.Router();
router.use(express.json());

// Customer recipes
router.get('/user-recipes', (req, res) => {
  console.log('Called user recipes for recipe endpoint');
  let query =
    `select * from recipe where rid IN (select rid from adds_recipe where uid = ` +
    req.query.userID +
    `)`;
  console.log(query);
  database.query(query, (err, result) => {
    res.send(result);
  });
});

router.post('/add-recipe', (req, res) => {
  console.log('Called user add recipe endpoint');
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
