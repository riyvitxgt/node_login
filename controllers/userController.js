/**
 * Created by king on 2015/8/23.
 */
var User = require('../models/user');
var passport = require('passport');

exports.login = function(req, res){
    passport.authenticate('local')(req, res, function(err){
        if(err){
            res.render('login', {title: 'login'});
        }
        res.redirect('/');
    })
}

exports.register = function(req, res){
    console.log('----------------------register----------------------');
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            console.log('error--------------------');
            res.render('register', {title:'register'});
        }

        passport.authenticate('local')(req, res, function(){
            res.redirect('/');
        });
    })
}