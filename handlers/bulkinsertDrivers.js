const Drivers = require('../models/Drivers');

const bulkInsertDrivers = async (req, res, next) => {
  const drivers = req.body;
  if (!drivers) {
    return res.status(400).json('No drivers!');
  }

  try {
    await   Drivers.insertMany(drivers);
    return res.status(201).json('Driver inserted.');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  bulkInsertDrivers,
  bulkInsertDrivers,
};