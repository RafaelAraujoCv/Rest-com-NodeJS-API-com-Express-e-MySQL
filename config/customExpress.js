const express = require('express') //inporta express
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => {

    const app = express()

    //Adicionado bibliotecas para o app usar
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    //Inclue todos as rotas no app
    consign()
        .include('controllers')
        .into(app)

    return app

}

//Responsabilidade configurar qualquer coisa no express