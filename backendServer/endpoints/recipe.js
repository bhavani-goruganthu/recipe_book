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

// add recipe
router.post('/add-recipe', (req, res) => {
  console.log('Called user add recipe endpoint');
  // Generate SQL query with user info
  let query1 =
    `INSERT INTO recipe (name, description, instructions, calories, image_url) VALUES ("` +
    req.body.recipeName +
    `","` +
    req.body.recipeDescription +
    `","` +
    req.body.recipeInstructions +
    `","` +
    req.body.recipeCalories +
    `","` +
    req.body.recipeImageURL +
    `")`;
  console.log(query1);
  // Send user query to db
  database.query(query1, (err, result) => {
    console.log('Uploaded recipe info to db');
    console.log(result.insertId);
    newRecipeID = result.insertId;

    let query2 =
      `INSERT INTO adds_recipe (uid, rid) VALUES ("` +
      req.body.appUser +
      `","` +
      newRecipeID +
      `")`;
    console.log(query2);
    database.query(query2, (err, result1) => {
      console.log('Uploaded user recipe info to db - adds_recipe table');
      res.send(result1);
    });
    // res.send(result);
  });
});

// edit user recipe
router.post('/edit-recipe', (req, res) => {
  console.log('Called edit-recipe endpoint');
  // Generate SQL query
  let query =
    `UPDATE recipe SET name = "` +
    req.query.editRecipeName +
    `", description = "` +
    req.query.editRecipeDescription +
    `", instructions = "` +
    req.query.editRecipeInstructions +
    `", calories = ` +
    req.query.editRecipeCalories +
    ` WHERE rid = ` +
    req.query.editRecipeID;

  console.log(query);
  // Send edit menu item query to db
  database.query(query, (err, result) => {
    console.log('Edited recipe on db');
    res.send(result);
  });
});

module.exports = router;
