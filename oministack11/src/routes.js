const express  = require('express');
const router  = express.Router();

router.post('/users', (request,response) => {
    const body = request.body;
    console.log(body);
   response.json({
      evento: "Evento Oministack",
      aluno: "Jamaluco"
   });
});

router.get('/users/:id', (request ,response) => {
   const params = request.params; 
   console.log(params);
   response.send('Foi doido');
});

module.exports = router;