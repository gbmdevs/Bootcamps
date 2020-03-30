const express  = require('express');
const router  = express.Router();
// Criação de Id Automatico
const connection = require('./database/connections');

// Area das Controllers 
const OngsController      = require('./Controller/OngsController');
const IncidentsController = require('./Controller/IncidentsController'); 

// HTTP: ONGS - Listar, Create
router.get('/ongs', OngsController.index); 
router.post('/ongs', OngsController.create);
// HTTP: Incidents
router.post('/incidents', IncidentsController.create);

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