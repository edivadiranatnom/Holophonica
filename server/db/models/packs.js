module.exports = (sequelize, Sequelize) => {
    const Packs = sequelize.define("packs", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        vol: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        artist: {
            type: Sequelize.STRING,
            allowNull: false
        },
        genre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        img: {
            type: Sequelize.STRING,
            allowNull: false
        },
        file: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return Packs;
};