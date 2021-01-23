const {verify,verifyresponsible} = require('../controllers/middleware.js')
const app = require('../app.js');
const controllerOccurrence = require('../controllers/occurrence.controller');
const bodyParser = require('body-parser');
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
const validator = require("../assets/Validations/validator");
const {login, refresh, responsible} = require('../controllers/auth.controller.js')


app.route('/occurrences/:id_occurrence/responsible')
    .post(responsible)

app.route('/all_occurrences')
    .get(verify,controllerOccurrence.readOccurrenceMonths)
    
app.route('/occurrences')
    .get( verify,controllerOccurrence.readOccurrence)

app.route('/occurrences/:id_occurrence')
    .get(verify, controllerOccurrence.readIDOccurrence)

app.route('/unfinished_occurrences')
    .get(verify,controllerOccurrence.readOccurrenceUnfinished)

app.route('/status/:id_occurrence')
    .put(verify,verifyresponsible, validator.updateStatus, controllerOccurrence.updateOccurrenceStatus) // ver isto ainda (validator feito)

app.route('/arrivals/:id_occurrence')
    .put(verify,verifyresponsible,controllerOccurrence.updateOccurrenceArrival) //                     Fazer validator

app.route('/departures/:id_occurrence')
    .put(verify,verifyresponsible,controllerOccurrence.updateOccurrenceDeparture) //                   Fazer validator

// Operational Occurrence
app.route('/occurrences/:id_occurrence/operationals')
    .get(verify,controllerOccurrence.readOperationalFromOccurrence)

app.route('/occurrences/:id_occurrence/operationals/:id_operational')
    .get(verify,controllerOccurrence.readIDOperationalOccurrence)

app.route('/occurrences/:id_occurrence/presences/:id_operational')
    .put(verify,verifyresponsible,validator.updatePresence, controllerOccurrence.updateOperationalOccurrencePresence) // certo (validator feito)

app.route('/occurrences/:id_occurrence/evaluations')
    .get(verify,controllerOccurrence.readPresentOperationalOccurrence)

app.route('/occurrences/:id_occurrence/evaluations/:id_operational')
    .put(verify,verifyresponsible,validator.updatePoints, controllerOccurrence.updateOperationalOccurrencePoints) // ver melhor (validator feito)

// Witness Ocurrence
app.route('/occurrences/:id_occurrence/witnesses')
    .get(verify,controllerOccurrence.readWitnessFromOccurrence)
    .post(verify,verifyresponsible,validator.addWitness, controllerOccurrence.saveWitnessOccurrence) // certo e fetch (ta feito o validator)

app.route('/occurrences/:id_occurrence/witnesses/:id_witness')
    .get(verify,controllerOccurrence.readIDWitnessOccurrence)

// Vehicle material occurrence
app.route('/occurrences/:id_occurrence/materials')
    .get(verify,verifyresponsible,controllerOccurrence.readVehicleMaterialFromOccurrence)

app.route('/occurrences/:id_occurrence/materials/:id_vei_mat')
    .get(verify,verifyresponsible,controllerOccurrence.readIDVehicleMaterialOccurrence)
    .put(verify,verifyresponsible,validator.updateConfirmation, controllerOccurrence.updateVehicleMaterialOccurrenceConfirmation) // (esta feito o validator)

app.route('/occurrences/:id_occurrence/materials_utilizations') // olhar para esta rota e decidir se é utilizations ou confirmations
    .get(verify,verifyresponsible,controllerOccurrence.readConfirmedVehicleMaterialOccurrence) // parece certo

app.route('/occurrences/:id_occurrence/materials_utilizations/:id_vei_mat') // certo 
    .put(verify,verifyresponsible,validator.updateUtilization, controllerOccurrence.updateVehicleMaterialOccurrenceUtilization) // (validator feito mas nao sei se esta certo)

// Notes
app.route('/occurrences/:id_occurrence/notes')
    .get(verify,controllerOccurrence.readNoteFromOccurrence)
    .post(verify,verifyresponsible,validator.addNote, controllerOccurrence.saveNote) // certo e fetch (feito o validator)

app.route('/occurrences/:id_occurrence/notes/:id_note')
    .get(verify,controllerOccurrence.readIDNote)

app.route('/occurrences/:id_occurrence/helprequests')
    .post(/*verify,verifyresponsible,*/controllerOccurrence.saveOccurrenceHelpRequest)  // MUDAR AQUI !!!
    
module.exports = app;