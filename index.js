//configurações - importando os pacotes que foram instalados

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

//template engine - chamando para criar um html dinamico
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`projeto rodando na porta: ${port}`);
} )

//rotas - basicamente é a url que acessamos - chamando a pagina view home.handlebars
app.get('/', function(req, res){
    res.render('home')
})