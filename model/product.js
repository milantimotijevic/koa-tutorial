module.exports = function(connection, Sequelize) {
    return connection.define('product', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        description: Sequelize.STRING
    });
};