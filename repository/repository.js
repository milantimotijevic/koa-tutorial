const Sequelize = require('sequelize');
const connection = new Sequelize('trading', 'milantimotijevic', '', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

const ProductModel = require("../model/product");

const Product = ProductModel(connection, Sequelize);

connection.sync().then(() => console.log('Sync complete'));

Product.create({
    name: "Broomstick",
    description: "Used for swiping floors"
}).then(function(newProduct) {

});