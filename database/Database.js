const Database = require ("sequelize")

const DB = new Database ("blog", "root", "", { host: "localhost", dialect: "mysql" })

module.exports = DB