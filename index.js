const express = require ("express")

const app = express ()

const DB = require ("./database/Database")

// configs //

app.set ("view engine", "ejs") // view engine ( views/ )
app.use (express.json()) // json body
app.use (express.urlencoded({ extended: true })) // form data
app.use (express.static ("public")) // static files ( public/ )

DB.authenticate () // Database connection and autenticate
.then ( () => console.log ("Conectado no banco de dados...") )
.catch ( error => console.log ("Erro na conexão com o bando de dados:", error))

// routes //

app.get ("/", (req, res) => {

    res.render ("index")
})

// listen //

app.listen (8080, () => console.log ("App rodando em http://localhost:8080"))