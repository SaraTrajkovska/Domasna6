const Cars = require('../models/Cars');

const bulkInsertCars = async (req, res, next) => {
  const cars = req.body;
  if (!cars ) {
    return res.status(400).json('No cars!');
  }

  try {
    await   Cars.insertMany(cars);
    return res.status(201).json('Car inserted.');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  bulkInsertCars,
};