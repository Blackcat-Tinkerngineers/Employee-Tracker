const dotenv = require('dotenv').config();
const mysql = require('mysql2');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,
{
      host: '127.0.0.1',
      user: 'root',
      password: '',
      dialect: 'mysql',
      PORT: '3306',
    });
