const express = require('express')
const cors = require('cors');
const app = express()

app.use(express.json());
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config.js');

app.use(cors()); // Enable CORS for all routes


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
    app.use("/farms", require('./routes/farm.routes.js'));


    app.listen(3001, () => {
        console.log('server running on port 3001')
    });
});