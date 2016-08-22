///<reference path ="./../typings/tsd.d.ts"/>
// import * as mongoose from 'mongoose';
let mongoose = require('mongoose');


//Defining user schema
let LocationSchema:any = new mongoose.Schema (
  {
    longitude: Number,
    latitude: Number,
    date_created: Date,
    date_deleted: {
      type: Date,
      default: null
  }
})


let Location = mongoose.model("Location", LocationSchema);
export = Location
