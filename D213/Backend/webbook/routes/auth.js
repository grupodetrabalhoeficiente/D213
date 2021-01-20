//rotas de autenticação
//exportar todas as rotas criadas

/*const authController = require('../controllers/auth.controller.js');
module.exports = function(app, passport) {
    //app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    //app.get('/signupSuccess', authController.signupSuccess);
    app.get('/signinSuccess', isLoggedIn, authController.signinSuccess);
    /*app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/signupSuccess',
        failureRedirect: '/signup'
    }));*/
   /* app.get('/logout', authController.logout);
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/signinSuccess',
        failureRedirect: '/signin'
    }));
    //para verificar se o utilizador está autenticado
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
};

*/
