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
