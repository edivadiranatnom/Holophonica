module.exports = (sequelize, Sequelize) => {
    const Newsletter = sequelize.define("newsletter", {
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        firstname: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        lastname: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return Newsletter;
};
