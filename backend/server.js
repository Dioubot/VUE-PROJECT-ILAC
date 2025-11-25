const express = require('express');
const cors = require('cors');
const coffees = require('./data/data');

const app = express();
const PORT = 3000;

app.use(cors());

let currentIndex = 0;

function buildResponse(index) {
  return {
    index: index,
    total: coffees.length,
    item: coffees[index]
  };
}

app.get('/item', (req, res) => {
  res.json(buildResponse(currentIndex));
});

app.get('/item/next', (req, res) => {
  currentIndex = (currentIndex + 1) % coffees.length;
  res.json(buildResponse(currentIndex));
});

app.get('/item/prev', (req, res) => {
  currentIndex = (currentIndex - 1 + coffees.length) % coffees.length;
  res.json(buildResponse(currentIndex));
});

app.get('/item/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id) || id < 0 || id >= coffees.length) {
    return res.status(400).json({ error: 'Invalid index' });
  }

  currentIndex = id;
  res.json(buildResponse(currentIndex));
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
