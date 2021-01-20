const {verify} = require('../controllers/middleware.js')
//app.get('/comments', verify, routeHandler)
const app = require('../app.js');
const controllerOccurrence = require('../controllers/occurrence.controller');
const bodyParser = require('body-parser');
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
const validator = require("../assets/Validations/validator");


app.route('/occurrences')
    .get( controllerOccurrence.readOccurrence)

app.route('/occurrences/:id_occurrence')
    .get(verify, controllerOccurrence.readIDOccurrence)

app.route('/unfinished_occurrences')
    .get(controllerOccurrence.readOccurrenceUnfinished)

app.route('/status/:id_occurrence')
    .put(validator.updateStatus, controllerOccurrence.updateOccurrenceStatus) // ver isto ainda (validator feito)

app.route('/arrivals/:id_occurrence')
    .put(controllerOccurrence.updateOccurrenceArrival) //                     Fazer validator

app.route('/departures/:id_occurrence')
    .put(controllerOccurrence.updateOccurrenceDeparture) //                   Fazer validator

// Operational Occurrence
app.route('/occurrences/:id_occurrence/operationals')
    .get(controllerOccurrence.readOperationalFromOccurrence)

app.route('/occurrences/:id_occurrence/operationals/:id_operational')
    .get(controllerOccurrence.readIDOperationalOccurrence)


app.route('/occurrences/:id_occurrence/presences/:id_operational')
    .put(validator.updatePresence, controllerOccurrence.updateOperationalOccurrencePresence) // certo (validator feito)

app.route('/occurrences/:id_occurrence/arrivals/:id_operational')
    .put(validator.updateArrival, controllerOccurrence.updateOperationalOccurrenceArrival) // ver melhor (validator feito)

app.route('/occurrences/:id_occurrence/departures/:id_operational')
    .put(validator.updateDeparture, controllerOccurrence.updateOperationalOccurrenceDeparture) // ver melhor (validator feito)

app.route('/occurrences/:id_occurrence/evaluations')
    .get(controllerOccurrence.readPresentOperationalOccurrence)

app.route('/occurrences/:id_occurrence/evaluations/:id_operational')
    .put(validator.updatePoints, controllerOccurrence.updateOperationalOccurrencePoints) // ver melhor (validator feito)

// Witness Ocurrence
app.route('/occurrences/:id_occurrence/witnesses')
    .get(controllerOccurrence.readWitnessFromOccurrence)
    .post(validator.addWitness, controllerOccurrence.saveWitnessOccurrence) // certo e fetch (ta feito o validator)

app.route('/occurrences/:id_occurrence/witnesses/:id_witness')
    .get(controllerOccurrence.readIDWitnessOccurrence)
    .put(controllerOccurrence.updateWitnessOccurrence) // nao deve ser preciso
    .delete(controllerOccurrence.deleteIDWitnessOccurrence) // nao deve ser preciso

// Vehicle material occurrence
app.route('/occurrences/:id_occurrence/materials')
    .get(controllerOccurrence.readVehicleMaterialFromOccurrence)

app.route('/occurrences/:id_occurrence/materials/:id_vei_mat')
    .get(controllerOccurrence.readIDVehicleMaterialOccurrence)
    .put(validator.updateConfirmation, controllerOccurrence.updateVehicleMaterialOccurrenceConfirmation) // (esta feito o validator)

app.route('/occurrences/:id_occurrence/materials_utilizations') // olhar para esta rota e decidir se é utilizations ou confirmations
    .get(controllerOccurrence.readConfirmedVehicleMaterialOccurrence) // parece certo

app.route('/occurrences/:id_occurrence/materials_utilizations/:id_vei_mat') // certo 
    .put(validator.updateUtilization, controllerOccurrence.updateVehicleMaterialOccurrenceUtilization) // (validator feito mas nao sei se esta certo)

// Notes
app.route('/occurrences/:id_occurrence/notes')
    .get(controllerOccurrence.readNoteFromOccurrence)
    .post(validator.addNote, controllerOccurrence.saveNote) // certo e fetch (feito o validator)

app.route('/occurrences/:id_occurrence/notes/:id_note')
    .get(controllerOccurrence.readIDNote)

app.route('/occurrences/:id_occurrence/help_requests')
    .post(controllerOccurrence.saveOccurrenceHelpRequest)

module.exports = app;
