const Sequelize =  require('sequelize');

require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging:fasle
});



const user = sequelize.define('user', {
  name:{
    type: sequelize.STRING,
  },
  age:{
    type: sequelize.INTEGER,
  },
  hobby:{
    type: sequelize.STRING,
  },
});

const course = sequelize.define('user', {
  name:{
    type: sequelize.STRING,
  },
  code:{
    type: sequelize.INTEGER,
  },

});

course.hasMany(user, {
  foreignKey: 'courseID',
});

sequelize.sync();

exports.sequelize = sequelize;
exports.user = user;
