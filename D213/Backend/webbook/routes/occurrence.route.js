const app = require('../app.js');
const controllerOccurrence = require('../controllers/occurrence.controller');
const bodyParser = require('body-parser');
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
const validator = require("../assets/Validations/validator");


app.route('/occurrences')
    .get(controllerOccurrence.readOccurrence) // certo 

app.route('/occurrences/:id_occurrence')
    .get(controllerOccurrence.readIDOccurrence) // certo dados - 1234

app.route('/departures/:id_occurrence') // perguntar duvida a professor
    .put(controllerOccurrence.updateOccurrenceDeparture) // ver isto ainda 

// Operational Occurrence
app.route('/occurrences/:id_occurrence/operationals')
    .get(controllerOccurrence.readOperationalFromOccurrence) // certo dados 1234 - fetch

app.route('/occurrences/:id_occurrence/operationals/:id_operational')
    .get(controllerOccurrence.readIDOperationalOccurrence) //certo dados 1234 - 2222            


app.route('/occurrences/:id_occurrence/presences/:id_operational')
    .put(controllerOccurrence.updateOperationalOccurrencePresence) // certo

app.route('/occurrences/:id_occurrence/arrivals/:id_operational')
    .put(controllerOccurrence.updateOperationalOccurrenceArrival) // ver melhor

app.route('/occurrences/:id_occurrence/departures/:id_operational')
    .put(controllerOccurrence.updateOperationalOccurrenceDeparture) // ver melhor

app.route('/occurrences/:id_occurrence/evaluations/:id_operational')
    .put(controllerOccurrence.updateOperationalOccurrencePoints) // ver melhor

// Witness Ocurrence
app.route('/occurrences/:id_occurrence/witnesses')
    .get(controllerOccurrence.readWitnessFromOccurrence) // certo dados-1234
    .post(validator.addWitness, controllerOccurrence.saveWitnessOccurrence) // certo e fetch

app.route('/occurrences/:id_occurrence/witnesses/:id_witness')
    .get(controllerOccurrence.readIDWitnessOccurrence) //certo dados -1234- jorge
    .put(controllerOccurrence.updateWitnessOccurrence) // nao deve ser preciso
    .delete(controllerOccurrence.deleteIDWitnessOccurrence) // nao deve ser preciso

// Vehicle material occurrence
app.route('/occurrences/:id_occurrence/materials')
    .get(controllerOccurrence.readVehicleMaterialFromOccurrence) // certo dados- 1234

app.route('/occurrences/:id_occurrence/materials/:id_vei_mat')
    .get(controllerOccurrence.readIDVehicleMaterialOccurrence) // certo dados- 1234- V54321
    .put(controllerOccurrence.updateVehicleMaterialOccurrenceConfirmation)

app.route('/occurrences/:id_occurrence/materials_utilizations') // olhar para esta rota e decidir se é utilizations ou confirmations
    .get(controllerOccurrence.readConfirmedVehicleMaterialOccurrence) // parece certo

app.route('/occurrences/:id_occurrence/materials_utilizations/:id_vei_mat') // certo 
    .put(controllerOccurrence.updateVehicleMaterialOccurrenceUtilization)

// Notes
app.route('/occurrences/:id_occurrence/notes')
    .get(controllerOccurrence.readNoteFromOccurrence) // certo dados- 1234
    .post(controllerOccurrence.saveNote) // certo e fetch 

app.route('/occurrences/:id_occurrence/notes/:id_note')
    .get(controllerOccurrence.readIDNote) //certo dados - 1234 - N123456
    .delete(controllerOccurrence.deleteIDNote) // nao é preciso

module.exports = app;
