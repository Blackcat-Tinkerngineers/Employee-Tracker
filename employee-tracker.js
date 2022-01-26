var inquirer = require('inquirer');
const mysql = require('mysql');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res) => {
    res.status(404).end();
  });


app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });

  db.query(`SELECT * FROM department`, (err, rows) => {
    console.log(rows);
  });

  db.query(`SELECT * FROM role`, (err, rows) => {
    console.log(rows);
  });

  db.query(`SELECT * FROM employee`, (err, rows) => {
    console.log(rows);
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });