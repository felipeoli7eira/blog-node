const express = require ("express")
const route = express.Router()

// routes //

route.get ("/articles", (req, res) => {

    res.send ("exibir os articles")
})

route.get ("/dashboard/articles/create", (req, res) => {

    res.send ("rota create/article")
})

module.exports = route