var express = require('express');
var router = express.Router();
var models = require('../server/models/index.js');

/* GET home page. */
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

// get all todos
router.get('/api/todos', function (req, res) {
  models.Todo.findAll({}).then(function (todos) {
    res.json(todos);
  });
});

// get single todo
router.get('/api/todos/:id', function (req, res) {
  models.Todo.find({
    where: {
      id: req.params.id
    }
  }).then(function (todo) {
    res.json(todo);
  });
});

// add new todo
router.post('/api/todos', function (req, res) {
  models.Todo.create({
    title: req.body.title,
  }).then(function (todo) {
    res.json(todo);
  });
});

// update single todo
router.put('/api/todos/:id', function (req, res) {
  models.Todo.find({
    where: {
      id: req.params.id
    }
  }).then(function (todo) {
    if (todo) {
      todo.updateAttributes({
        title: req.body.title,
        complete: req.body.complete
      }).then(function (todo) {
        res.send(todo);
      });
    }
  });
});

// delete a single todo
router.delete('/api/todos/:id', function (req, res) {
  models.Todo.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (todo) {
    res.json(todo);
  });
});

module.exports = router;
