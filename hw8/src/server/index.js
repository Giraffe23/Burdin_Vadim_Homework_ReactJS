const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/test');

const app = express();

app.use(cors());

const Pokemon = require('./models/pokemon');

app.get('/', (req, res) => {
  res.send('Hi, there.');
});

app.get('/pokemons', (req, res) => {
  Pokemon.find().then(pokemons => {
    res.json(pokemons);
  });
});

app.get('/pokemons/:id', (req, res) => {
  Pokemon.findById(req.params.id).then(pokemon => {
    res.json(pokemon);
  });
});

app.listen(2323);
