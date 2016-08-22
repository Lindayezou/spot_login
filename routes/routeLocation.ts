let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Location = require('../models/modelLocation')

//Gelocation Data Model
// let Geocoord = mongoose.model('Geocoord', {
//   longitude: Number,
//   latitude: Number,
//   date_created: Date,
//   date_deleted: {
//     type: Date,
//     default: null
//   }
// })

//Create geolaction data
router.post('/addLocation', function(req, res, next) {
  console.log(`RAWWWWWWWWWR ${req.body.longitude}`)
  let geoCoords = new Location({
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    date_created: new Date()
  });
  geoCoords.save(function(err, location) {
       if(err) return next(err);
       res.send("This location has been added");
   });

});
//
//   geo_coords.save((err, res) => {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log(res);
//     }
//   })
//
//   res.sendStatus(200);
// });

export = router;
