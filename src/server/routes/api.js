var express = require('express');
var Task = require('../models/Task');
var mongoose = require('mongoose');
var router = express.Router();

router.get('/tasks', getTasks);
router.post('/newtask', createTask);
router.delete('/task/:_id', deleteTask);

function getTasks(req, res) {
  Task.find({}, function(err, users) {
    if (err) {
      return res.status(500).end(err);
    }
    res.send(users);
  });
}

function createTask(req, res) {
  var task = req.body;
  Task.create(task, function(err, task) {
    if (err) {
      return res.status(500).end(err);
    }
    res.json(task);
  });
}

function deleteTask(req, res) {
  var taskId = req.params._id;
  Task.find({_id: taskId}).remove(function(err, data) {
    if (err) {
      return res.status(500).end(err);
    }
    res.json(data);
  });
}

module.exports = router;
