const { check } = require('express-validator/check');

// app.put '/operationals/:id_operational'
exports.updatePassword = [check('newPassword')
    .isLength({ min: 5, max: 45 })
    .isEmpty()
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
exports.addWitness = [check('testimony')
    .isLength({ min: 5, max: 1000 })
    .isEmpty(),
    check('justification')
    .isLength({ min: 5, max: 500 })
    .isEmpty(),
    check('name')
    .isLength({ min: 5, max: 150 })
    .isEmpty(),
    check('email')
    .isLength({ min: 9, max: 50 })
    .isEmpty()
    .isEmail(),
    check('place')
    .isLength({ min: 5, max: 45 })
    .isEmpty(),
    check('profession')
    .isLength({ min: 5, max: 45 })
    .isEmpty()
]
