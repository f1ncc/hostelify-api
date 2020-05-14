const { Schema, model, Types } = require('mongoose');

const hostelSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  type: {
    //boys or girls
    type: String,
    required: true,
    enum: {
      values: ['boys', 'girls'],
    },
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
    type: Number,
  },
  beds: {
    total: {
      type: Number,
    },
    occupied: {
      type: Number,
    },
    vacant: {
      type: Number,
    },
  },
  incharge: {
    type: Types.ObjectId,
    ref: 'Admin',
  },
  facilites: [String],
});
module.exports = model('Hostel', hostelSchema);
