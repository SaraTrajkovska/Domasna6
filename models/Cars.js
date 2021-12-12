const { model } = require('mongoose');

const Cars = model('cars', {
  carName: { type: String, index: true, required: true },
  yearOfBuild: Number,
  model: String,
  make: String,
});

module.exports = Cars;