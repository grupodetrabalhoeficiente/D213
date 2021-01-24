const { check } = require('express-validator/check');

// app.put '/operationals/:id_operational'
exports.updatePassword = [check('newPassword')
    .isLength({ min: 5, max: 45 })
    .custom((val, { req, loc, path }) => {
        if (val !== req.body.confirmPassword) {
            throw new Error("Passwords don't match");
        }
        else {
            return val;
        }
    }),
];

// app.post '/occurrences/:id_occurrence/notes'
exports.addNote = [check('description', "Descrição inválida.")
    .isLength({ min: 5, max: 1000 })
]

// app.put '/occurrences/:id_occurrence/materials/:id_vei_mat'   
exports.updateConfirmation = [check('confirmation')
    .custom((val, { req, loc, path }) => {
        if (val !== '0' && val !== '1') {
            throw new Error("Confirmação inválida.")
        }
        else {
            return val;
        }
    })
]

// app.put '/occurrences/:id_occurrence/materials_utilizations/:id_vei_mat'   
exports.updateUtilization = [check('utilization')
    .custom((val, { req, loc, path }) => {
        if (val !== '0' && val !== '1') {
            throw new Error("Utilização inválida.")
        }
        else {
            return val;
        }
    })
]

//app.post '/occurrences/:id_occurrence/witnesses'      
exports.addWitness = [check('testimony', "Testemunho inválido.")
    .isLength({ min: 5, max: 1000 }),
    check('justification', "Justificação inválida.")
    .isLength({ min: 5, max: 500 }),
    check('name', "Nome inválido.")
    .isLength({ min: 5, max: 150 }),
    check('email', "Email inválido.")
    .isLength({ min: 9, max: 50 })
    .isEmail(),
    check('place', "Morada inválida.")
    .isLength({ min: 5, max: 45 }),
    check('profession', "Profissão inválida.")
    .isLength({ min: 5, max: 45 })
]

// app.put '/status/:id_occurrence'  
exports.updateStatus = [check('status', "O estado da ocorrência é inválido.")
    .custom((val, { req, loc, path }) => {
        if (val !== "Finalizada") {
            throw new Error("Status invalido.")
        }
        else {
            return val;
        }
    })
]

// app.put '/occurrences/:id_occurrence/presences/:id_operational'  
exports.updatePresence = [check('presence')
    .custom((val, { req, loc, path }) => {
        if (val !== '0' && val !== '1') {
            throw new Error("Presença inválida.")
        }
        else {
            return val;
        }
    })
]

// app.put '/occurrences/:id_occurrence/arrivals/:id_operational'  
exports.updateArrival = [check('arrival', "A hora de chegada à ocorrência é inválida.")
    .isLength(20)
]

// app.put '/occurrences/:id_occurrence/departures/:id_operational'   
exports.updateDeparture = [check('departure', "A hora de partida da ocorrência é inválida.")
    .isLength(20)
]

// app.put /occurrences/:id_occurrence/evaluations/:id_operational  
exports.updatePoints = [check('points', "A avaliação é inválida")
    .custom((val, { req, loc, path }) => {
        if (val !== '1' && val !== '2' && val !== '3' && val !== '4' && val !== '5') {
            throw new Error("Avaliação inválida.")
        }
        else {
            return val;
        }
    })
]
