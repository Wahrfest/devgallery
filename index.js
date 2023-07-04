//Importando MongoDB
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; //URI de conexão do MongoDB
const client = new MongoClient(uri);

//Conectanto MongoDB
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Database foi!');
    } catch (error) {
        console.error('Parece que deu ruim com o MongoDB: ', error);
    }
};

connectToMongoDB();

//Importando Express
const express = require("express");
const app = express();

//Importando EJS e o CSS
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Criação de Rotas a partir daqui

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/sobre", function (req,res) {
    res.render("sobre");
});

app.get("/portfolio", function (req,res) {
    res.render("portfolio");
});

app.get("/contato", function (req,res) {
    res.render("contato");
});

//Utilizando uma porta
app.listen(4000, function (erro) {
    if(erro){
        console.log("Ocorreu um erro!");
    } else {
        console.log("Foi!");
    }
});