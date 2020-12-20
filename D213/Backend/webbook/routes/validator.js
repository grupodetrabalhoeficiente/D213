const { check } = require('express-validator/check');

exports.updatePassword = [check('newPassword')
    .isLength({ min: 5, max: 10 })
    .custom((val, { req, loc, path }) => {
        if (val !== req.body.confirmPassword) {
            throw new Error("Passwords don't match");
        }
        else {
            return val;
        }
    }),
];
