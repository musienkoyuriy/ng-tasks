var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
  title:       String,
  description: String,
  priority:    String,
  done:        Number
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;
