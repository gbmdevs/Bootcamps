const express  = require('express');
const app = express();
const PORT = 3333;

app.get('/', (request,response) => {
   response.json({
      evento: "Evento Oministack",
      aluno: "Jamaluco"
   });
});

app.listen(PORT, () => {
     console.log("Servidor Rodando na porta: " + PORT);
});