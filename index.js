const express = require ("express")

const app = express ()

const DB = require ("./database/Database")

const categoriesController = require ("./categories/Controller")
const articlesController = require ("./articles/Controller")

const ArticlesModel = require ("./articles/Model")
const CategoriesModel = require ("./categories/Model")

// configs //

app.set ("view engine", "ejs") // view engine ( views/ )
app.use (express.json()) // json body
app.use (express.urlencoded({ extended: true })) // form data
app.use (express.static ("public")) // static files ( public/ )

DB.authenticate () // Database connection and autenticate
.then ( () => console.log ("Conectado no banco de dados...") )
.catch ( error => console.log ("Erro na conexão com o bando de dados:", error))

// routes //

app.use ("/", categoriesController)
app.use ("/", articlesController)


// listen //

app.listen (8080, () => console.log ("App rodando em http://localhost:8080"))