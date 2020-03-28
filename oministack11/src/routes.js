const express  = require('express');
const router  = express.Router();


// POST : ONGS
router.post('/ongs', (request , response) => {
    const { name, email , whatspp, city , uf} = request.body;
    response.json(request.body);
});


// Area de Teste - Para Imsomnia
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


router.get('/users', (request , response) => {
    response.send('Hello Users');
});

module.exports = router;