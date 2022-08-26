const Sequelize = require("sequelize");

const sequelize =  new Sequelize("reactjs", "mysql", "mysql", {
    dialect: "mysql",
    host: "localhost"
});

const Notes = require('./notes')(sequelize);

module.exports = {
    sequelize : sequelize,
    notes : Notes
}
