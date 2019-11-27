const Sequelize = require ("sequelize")

const DB = require ("./../database/Database")

const Categories = DB.define ("categories", {

    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

// Categories.sync ({ force: true })

module.exports = Categories