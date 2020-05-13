const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
  hostels: [
    //array of hostels
    {
      type: mongoose.Types.ObjectId,
      ref: 'Hostel',
    },
  ],
});

module.exports = mongoose.model('Admin', adminSchema);
