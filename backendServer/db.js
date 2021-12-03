const mysql = require('mysql');

// Connect to MySQL DB
const database = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'Bhavani@123',
  database: 'recipebooknov27',
});

database.connect((err) => {
  if (err) throw err;
  console.log('Connected to DB!');
});

module.exports = database;
