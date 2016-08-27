const Sequelize = require('sequelize');

if (!process.env.DB_HOST) {
  require('dotenv').config({ silent: true });
}
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 120000,
  },
  logging: false,
});


// This is the table creation for my user and all of its properties
// Make sure the datatypes are correct
// MAKE SURE THAT THE SEQUELIZE DATATYPE IS CAPTIALIZE
const user = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  hobby: {
    type: Sequelize.STRING,
  },
  occupation: {
    type: Sequelize.STRING,
  },
});

// This is the table creation for my apps and all of its properties
// Make sure the datatypes are correct
// MAKE SURE THAT THE SEQUELIZE DATATYPE IS CAPTIALIZE
const app = sequelize.define('app', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  releaseDate: {
    type: Sequelize.DATE,
  },
  budget: {
    type: Sequelize.STRING,
  },
  popular: {
    type: Sequelize.STRING,
  },
});

user.hasMany(app, {
  foreignKey: 'userID',
});

sequelize.sync();

exports.sequelize = sequelize;
exports.user = user;
exports.app = app;
