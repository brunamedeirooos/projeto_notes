//configurações - importando os pacotes que foram instalados

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

//importando banco de dados
const db = require("./db/connection");
 

//template engine - chamando para criar um html dinamico
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));  //onde fica o diretorio publico - que é de onde vem o css - é do public que vai sair os arquivos estáticos, os assets
app.use(bodyParser.urlencoded({ extended: true }));


//importação de rotas
const notesRoutes = require('./routes/notes');

//rotas - basicamente é a url que acessamos - chamando a pagina view home.handlebars
app.get('/', function(req, res){
    res.render('home');
})

//rotas
app.use('/notes', notesRoutes);


db.initDb((err, db) => {
    if(err){
        console.log(err);
    } else {
        console.log("O banco conectou com sucesso!")
        app.listen(port, () => {
            console.log(`projeto rodando na porta: ${port}`);
        } )
    }
})






