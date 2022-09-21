const mongoose = require('mongoose');

//create Schema
const TodoItemSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

//export this Schema
module.exports = mongoose.model('todo', TodoItemSchema);
