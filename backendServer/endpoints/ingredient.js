const express = require('express');
const database = require('../db');

const router = express.Router();
router.use(express.json());

// Ingredients
router.get('/all-ingredients', (req, res) => {
  console.log('Called all Ingredients endpoint');
  let query = `select * from ingredient`;
  console.log(query);
  database.query(query, (err, result) => {
    res.send(result);
  });
});

// router.post('/signup', (req, res) => {
//   console.log('Called user signup endpoint');
//   // Generate SQL query with user info
//   let query =
//     `INSERT INTO user (name, daily_calorie_limit, login_username, login_password) VALUES ("` +
//     req.body.userName +
//     `","` +
//     req.body.userDailyCalorieLimit +
//     `","` +
//     req.body.userEmail +
//     `","` +
//     req.body.userPassword +
//     `")`;

//   console.log(query);
//   // Send user query to db
//   database.query(query, (err, result) => {
//     console.log('Uploaded user info to db');
//     res.send(result);
//   });
// });

module.exports = router;
