const Sequelize = require ("sequelize")

const DB = require ("./../database/Database")
const CategoryModel = require ("./../categories/Model")

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

CategoryModel.hasMany (Article) // uma categoria tem muitos artigos
Article.belongsTo(CategoryModel) // pertence á ->> relacionamento entre tabelas

// Article.sync ({ force: true })

module.exports = Article