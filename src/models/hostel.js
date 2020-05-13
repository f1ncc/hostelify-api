const mongoose = require('mongoose');
const schema = mongoose.Schema;
const hostelSchema = new schema({
  location: {
    type: String,
    required: true,
  },
  type: {
    //boys or girls
    type: String,
    required: true,
  },
  warden: {
    type: String,
    required: true,
  },
  floors: {
    //total no. of floors
    type: Number,
    required: true,
  },
  rooms: {
    //total rooms
    types: Number,
  },
  beds: {
    total: Number,
    occupid: Number,
    vacant: Number,
  },
  incharge: {
    type: mongoose.Types.ObjectId,
    ref: 'Admin',
  },
  facilites: [
    //array of facilities like wifi,hot-water
    {
      type: string,
    },
  ],
});
module.exports = mongoose.model('Hostel', hostelSchema);
