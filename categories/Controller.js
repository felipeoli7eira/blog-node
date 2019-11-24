const express = require ("express")
const route = express.Router()


// routes //

route.get ("/categories", (req, res) => {

    res.send ("exibir as categorias existentes")
})

route.get ("/dashboard/categories/create", (req, res) => {

    res.send ("rota create/categoria")
})

module.exports = route