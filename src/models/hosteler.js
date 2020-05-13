const mongoose = require('mongoose');
const schema = mongoose.Schema;

const HostelerSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  fatherName: {
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
  parentNo: {
    type: Number,
    required: true,
  },
  roomDetails: {
    roomNo: string, //room no . allocated
    bedNumber: Number, //bed no. allocated
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  collegeDetails: {
    Id: String, //college Id
    Name: String,
    branch: String,
    year: Number,
  },
  medication: {
    // if frequently suffering from any disease (optional)
    type: String,
  },
  hostel: {
    type: mongoose.Types.ObjectId,
    ref: 'Hostel',
  },
  localGuardian: {
    // (optional)
    name: String,
    mobileNumber: Number,
  },
});

module.exports = mongoose.model('Hosteler', HostelerSchema);
