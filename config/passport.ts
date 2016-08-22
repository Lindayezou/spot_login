/// <reference path="./../typings/tsd.d.ts"/>
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// passport.use(new LocalStrategy(function(email, password, done) {
//   console.log("THIS IS THE EMAIL FROM PASSPORT", email)
//   console.log('THIS IS THE PASSWORDdddddddd~!!!!!!!!!!!!!!!!!!!!!!!!!', password)
//     User.findOne({email: email}, function(err, user) {
//       console.log("THIS IS THE USER FROM PASSPORT", user)
//       if(err) {return done(err)};
//       if(!user) {return done(null, false, {message: 'Incorrect email.'});};
//       if(!user.validatePassword(password)) {return done(null, false, {message: 'Password does not match.'})};
//       return done(null, user);
//     });
// }));

passport.use(new LocalStrategy(
  function(email, password, done) {
    User.findOne({ email: email }, function(err, user) {
      console.log("********************PASSPORT*******************************************************************");
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.use(new FacebookStrategy({
  clientID: "1472316759758075",
  clientSecret: "6f4add569ecca11597ad7b37a3120308",
  callbackURL: "http://localhost:3000/v1/api/auth/facebook/callback",
  passReqToCallback: true,
  profileFields: ['id', 'name', "emails"]
  },
  function(req, accessToken, refreshToken, profile, done){
    console.log(profile.emails);
    User.findOne({ facebookId: profile.id }, function (err, user) {
      if(err) return done(err, null);
      if(user) {
        return done(null, user)
      } else {
        var user = new User();
        if(profile.emails) {
          user.email = profile.emails[0].value
        } else {
          user.email = profile.email + "@facebook.com";
        }
        user.email = profile.name.givenName.toLowerCase() + profile.name.familyName.toLowerCase();
        user.save(function(err, user) {
          if(err) return err;
          console.log("Saved");
        })
        return done(err, user);
      }
    });
  }));
