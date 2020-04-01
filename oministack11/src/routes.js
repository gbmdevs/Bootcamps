const express  = require('express');
const router  = express.Router();

// Criação de Id Automatico
const connection = require('./database/connections');

// Area das Controllers 
const OngsController      = require('./Controller/OngsController');
const IncidentsController = require('./Controller/IncidentsController'); 
const ProfileController   = require('./Controller/ProfileController');
const SessionController   = require('./Controller/SessionController');

// HTTP: ONGS - Listar, Create
router.get('/ongs', OngsController.index); 
router.post('/ongs', OngsController.create);
// HTTP: Incidents
router.post('/incidents', IncidentsController.create);
router.get('/incidents', IncidentsController.index);
router.delete('/incidents/:id', IncidentsController.delete);
// HTTP: Profile
router.get('/profile', ProfileController.index);
// HTTP: Session
router.post('/session', SessionController.create);
  

module.exports = router;