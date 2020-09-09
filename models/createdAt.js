const mongoose = require('mongoose');

var TestSchema = new mongoose.Schema({
    createdAt: { type: Date, expires: 'duration', default: Date.now }
  });

  module.exports = new mongoose.model('CreatedAt',TestSchema);