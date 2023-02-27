//configurações - chamando os pacotes que foram instalados

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.listen(port, () => {
    console.log(`projeto rodando na porta: ${port}`);
} )

//rotas - basicamente é a url que acessamos
app.get('/', function(req, res){
    res.send('o aplicativo está funcionando')
})