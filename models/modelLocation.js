"use strict";
var mongoose = require('mongoose');
var LocationSchema = new mongoose.Schema({
    longitude: Number,
    latitude: Number,
    date_created: Date,
    date_deleted: {
        type: Date,
        default: null
    }
});
var Location = mongoose.model("Location", LocationSchema);
module.exports = Location;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxMb2NhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGVsTG9jYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUluQyxJQUFJLGNBQWMsR0FBTyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQzFDO0lBQ0UsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLE1BQU07SUFDaEIsWUFBWSxFQUFFLElBQUk7SUFDbEIsWUFBWSxFQUFFO1FBQ1osSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsSUFBSTtLQUNoQjtDQUNGLENBQUMsQ0FBQTtBQUdGLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQzFELGlCQUFTLFFBQVEsQ0FBQSJ9