const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking', 'root', 'Hannah903@ophio',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
