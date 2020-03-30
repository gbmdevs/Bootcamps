const express  = require('express');
const app = express();
const PORT = 3333;
const route  =  require('./routes');

/* 
* Estudos Gerais
* Metodo HTTP:
* GET: Buscar/listar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT : Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/

/*
 * Tipos de Parametros:
  Query: Parametros nomeados enviados na rota apos "?"
  Servem para filtros, paginações
  Routes Parms: São parametros utilizados para identificar recursos(rotas)
  Request Body:  Corpo da requisição, utilizado para criar ou alterar recursos
  Exemplo : ?user=jamal&idade=25
  */
/*
  Driver para o Banco SQLite - Select *
  Query Builder: table('users').select('*').where();
  KNEXJS - Ferramenta
*/
app.use(express.json());

// Rotas
app.use(route);

app.listen(PORT, () => {
     console.log("Servidor Rodando na porta: " + PORT);
});