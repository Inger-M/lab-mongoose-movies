const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: {
    type: String,
    enum: ['Tom Cruise', 'Beyoncé', 'Daffy Duck']
  },
  occupation: {
    type: String,
    enum: ['actor', 'singer', 'comedian', 'unknown']
  },
  catchPhrase: {
    type: String,
    required: true
  }
});

const celebrity = mongoose.model('celebrity', celebritySchema);
module.exports = celebrity;
