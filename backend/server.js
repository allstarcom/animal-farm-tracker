const express = require('express')
const cors = require('cors');
const app = express()

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

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
    app.use("/farms", require('./routes/farm.routes.js'));


    app.listen(5001, () => {
        console.log('server running on port 5001')
    });
});