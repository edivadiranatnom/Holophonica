const Sequelize = require('sequelize');
const sequelize = new Sequelize('mydb', 'davide', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
    },
    logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.packs = require("./packs.js")(sequelize, Sequelize);
db.newsletter = require("./newsletter.js")(sequelize, Sequelize);

module.exports = db;
