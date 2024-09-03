const express = require('express')
const app = express()

app.use(express.json());
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config.js');

mongoose.connect(dbConfig.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');

  app.use("/animals", require('./routes/animal.routes.js'));

  app.listen(3001, () => {
    console.log('server running on port 3000')
  });
});