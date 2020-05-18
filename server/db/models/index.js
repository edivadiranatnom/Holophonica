const Sequelize = require('sequelize');
const sequelize = new Sequelize('holophonica', 'davide', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.packs = require("./packs.js")(sequelize, Sequelize);
db.users = require("./users.js")(sequelize, Sequelize);

module.exports = db;
