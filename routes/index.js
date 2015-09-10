var express = require('express');
var userController = require('../controllers/userController');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session);
  res.render('index', { title: 'index' });
});


router.get('/register', function(req, res){
  res.render('register', {title: 'register'});
});

router.post('/register', userController.register);


router.get('/login', function(req, res){
    res.render('login', {title: 'login'})
});

router.get('/logout', function(req, res){
  res.redirect('/');
});

router.post('/login', userController.login);

router.get('/home', function(req,res){
  res.render('home', {title: 'home',username:req.session.user.username});
});
module.exports = router;
