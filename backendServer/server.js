const express = require('express');
const cors = require('cors');
const user = require('./endpoints/user'); // Used for user APIs
const recipe = require('./endpoints/recipe'); // Used for recipe APIs
const category = require('./endpoints/category'); // Used for recipe APIs
const ingredient = require('./endpoints/ingredient'); // Used for recipe APIs
const app = express();

app.use(cors());
app.use(express.json());

port = 4000;
app.use('/api/user', user);
app.use('/api/recipe', recipe);
app.use('/api/category', category);
app.use('/api/ingredient', ingredient);
app.listen(port, () => console.log(`Backend server on port ${port}!`));
