var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});


router.get('/login', function(req, res){
  console.log('aaaa');
  res.render('login', {title: 'login'});
});

router.get('/logout', function(req, res){
  res.redirect('/');
});

router.post('/doLogin', function(req, res){
  var user = {
    username: 'king',
    password: '123456'
  }
  console.log('toLogin');
  if(req.body.username === user.username
    && req.body.password === user.password){
    res.redirect('/home');
  }
  res.redirect('/');
});

router.get('/home', function(req,res){
  res.render('home', {title: 'home', user: {}});
});
module.exports = router;
