const {verify,verifyresponsible} = require('../controllers/middleware.js')
const app = require('../app.js');
const controllerOccurrence = require('../controllers/occurrence.controller');
const validator = require("../assets/Validations/validator");
const { responsible} = require('../controllers/auth.controller.js')

app.route('/occurrences/:id_occurrence/responsible')
    .post(responsible)

app.route('/all_occurrences')
    .get(verify,controllerOccurrence.readOccurrenceMonths)
    
app.route('/finished_occurrences')
    .get(verify,controllerOccurrence.readFinishedOccurrences)
    
app.route('/occurrences')
    .get( verify,controllerOccurrence.readOccurrence)

app.route('/occurrences/:id_occurrence')
    .get(verify, controllerOccurrence.readIDOccurrence)

app.route('/unfinished_occurrences')
    .get(verify,controllerOccurrence.readOccurrenceUnfinished)

app.route('/status/:id_occurrence')
    .put(verify,verifyresponsible, validator.updateStatus, controllerOccurrence.updateOccurrenceStatus) 

app.route('/arrivals/:id_occurrence')
    .put(verify,verifyresponsible,controllerOccurrence.updateOccurrenceArrival) 

app.route('/departures/:id_occurrence')
    .put(verify,verifyresponsible,controllerOccurrence.updateOccurrenceDeparture) 

// Operational Occurrence
app.route('/occurrences/:id_occurrence/operationals')
    .get(verify,controllerOccurrence.readOperationalFromOccurrence)

app.route('/occurrences/:id_occurrence/operationals/:id_operational')
    .get(verify,controllerOccurrence.readIDOperationalOccurrence)

app.route('/occurrences/:id_occurrence/presences/:id_operational')
    .put(verify,verifyresponsible,validator.updatePresence, controllerOccurrence.updateOperationalOccurrencePresence) 

app.route('/occurrences/:id_occurrence/evaluations')
    .get(verify,controllerOccurrence.readPresentOperationalOccurrence)

app.route('/occurrences/:id_occurrence/evaluations/:id_operational')
    .put(verify,verifyresponsible,validator.updatePoints, controllerOccurrence.updateOperationalOccurrencePoints) 

// Witness Ocurrence
app.route('/occurrences/:id_occurrence/witnesses')
    .post(verify,verifyresponsible,validator.addWitness, controllerOccurrence.saveWitnessOccurrence) 


// Vehicle material occurrence
app.route('/occurrences/:id_occurrence/materials')
    .get(verify,verifyresponsible,controllerOccurrence.readVehicleMaterialFromOccurrence)

app.route('/occurrences/:id_occurrence/materials/:id_vei_mat')
    .put(verify,verifyresponsible,validator.updateConfirmation, controllerOccurrence.updateVehicleMaterialOccurrenceConfirmation) 

app.route('/occurrences/:id_occurrence/materials_utilizations') 
    .get(verify,verifyresponsible,controllerOccurrence.readConfirmedVehicleMaterialOccurrence) 

app.route('/occurrences/:id_occurrence/materials_utilizations/:id_vei_mat') 
    .put(verify,verifyresponsible,validator.updateUtilization, controllerOccurrence.updateVehicleMaterialOccurrenceUtilization) 

// Notes
app.route('/occurrences/:id_occurrence/notes')
    .post(verify,verifyresponsible,validator.addNote, controllerOccurrence.saveNote) 

app.route('/occurrences/:id_occurrence/helprequests')
    .post(verify,verifyresponsible,controllerOccurrence.saveOccurrenceHelpRequest)  
    
module.exports = app;