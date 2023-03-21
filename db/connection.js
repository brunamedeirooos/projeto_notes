//importando o mongoDB - dentro dele terei uma classe chamada mongoClient que será usado para conectar ao banco
const {MongoClient} = require('mongodb');

//definindo url de  conexão - se fosse um site teria o https:// que é o protocolo do site - porem o mongodb tem o proprio protocolo que o servidor conecta por ele
const url = "mongodb://localhost:27017/notesDb";

//será modificada ao longo do tempo
let _db;

//vai inicializar o bando de dados quando preciso - callback function para poder retornar a instância do banco de dados - aqui eu tou criando uma variavel chamada initDb que vai receber uma callback como parametro - useUnifiedTopology: true configuração requerido pela documentação
const initDb = cb => {

    //connect retorna uma promessa - conectou? then(então)..
    MongoClient.connect(url, { useUnifiedTopology: true })
    .then(client => {
        _db = client
        cb(null, _db)
     //o initdb quando conecta com sucesso - devolve o client
    })

    //se nao deu conexão correta - irá exibir o erro para o usuário
    .catch(err => {
        cb(err);
    });

}

//retorna a função do client - retorna a conexão
const getDb = () => {
    return _db;
}

//retornar ela para poder importar em outro lugar - então você exporta
module.exports = {
    initDb,
    getDb
  }