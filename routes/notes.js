//criando rotas - view adicionar notas - O express.Router nos ajuda a manipular nossas rotas em aplicativos NodeJS

const Router = require('express').Router;

const router = Router();


//enviando pagina de criação - renderizando uma view chamada create

router.get('/', function(req, res){
    res.render('notes/create');
})

module.exports = router;
