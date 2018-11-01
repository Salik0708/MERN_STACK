const express = require('express');
const router = express.Router();

//Item Model
const { Item } = require('../../models/Item');

// GET
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.send(items))
    .catch(err => res.status(400).send(err));
});

// POST
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save()
    .then(item => res.send(item))
    .catch(err => res.status(400).send(err));
});

// Delete
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Item.findByIdAndRemove(id)
    .then(item => res.send(item))
    .catch(err => res.status(400).send(err));
});

module.exports = router; 