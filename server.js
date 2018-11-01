const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const items = require('./routes/api/items');

const db = 'mongodb://brad:brad123@ds147723.mlab.com:47723/shopping_list>' || 'mongodb://localhost:27017/ShoppingList';
const app = express();

app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB server.'))
  .catch(err => console.log(`Unable to connect to MongoDB server: ${err}`));

app.use('/api/items', items);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    req.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  }); 
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});