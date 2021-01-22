/*var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require ('./User');

//CRIA UM NOVO USER
router.post('/', function (req, res) {
    User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        }, 
        function (err, user) {
            if (err) return res.status(500).send("Houve um problema a adicionar informação na base de dados.");
            res.status(200).send(user);
        });
});

//RETRIBUI TODOS OS USERS DA BASE DE DADOS
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("Houve um problema a encontrar os utilizadores.");
        res.status(200).send(users);
    });
});

// OBTEM UM ÚNICO UTILIZADOR DA BASE DE DADOS
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("Houve um problema a encontrar o utilizador.");
        if (!user) return res.status(404).send("Utilizador não encontrado.");
        res.status(200).send(user);
    });
});

// ELIMINA UM UTILIZADOR DA BASE DE DADOS
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("Houve um problema a eliminar o utilizador.");
        res.status(200).send("Utilizador "+ user.name +" foi eliminado.");
    });
});

// ATUALIZA UM ÚNICO UTILIZADOR NA BASE DE DADOS
router.put('/:id', function (req, res) {
    
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("Houve um problema a atualizar esse utilizador.");
        res.status(200).send(user);
    });
});



module.exports = router;*/