const { model } = require('mongoose');

const Drivers = model('drivers', {
  driverName: { type: String, index: true, required: true },
  carID: Boolean,
  name: String,
  country: String,
  experience: Boolean,
});

module.exports = Drivers;