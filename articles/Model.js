const Sequelize = require ("sequelize")

const DB = require ("./../database/Database")

const Article = DB.define ("articles", {

    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }

})

module.exports = Article