let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let User = require('../models/modelUser')
var passport = require('passport');

let user:any = new User();

router.post('/register', function(req, res, next) {
    user.email = req.body.email;
    console.log("IS THIS WORKING??????????????", user)
    let setPassword = user.setPassword(req.body.password);
    user.passwordHash = setPassword.passwordHash;
    user.salt = setPassword.salt;
    console.log(`???????????????? ${user}`)
    user.save(function(err, user) {
        if(err) return next(err);
        res.send("Registration Complete. Please login.");
    });
});

router.post('/login', (req, res, next ) => {
  console.log("this is before the if statement")
  if(!req.body.email || !req.body.password) return res.status(400).send("Please fill out every field");
  console.log("this is after the if statemnet")
  let email = req.body.email;
  let password = req.body.password;
  User.findOne({ email: email }, function(err, correctUser) {
    console.log("********************PASSPORT*****************************", correctUser);
    if (correctUser.validatePassword(password)) {
      let token = correctUser.generateJWT();
      console.log(token)
      return res.json({token : token});
    }
    if (!correctUser) {
      res.send({ message: 'Incorrect email.' });
    }
    if (!correctUser.validatePassword(password)) {
      res.send({message: 'Incorrect password.' });
    }
   });
})

export = router;
