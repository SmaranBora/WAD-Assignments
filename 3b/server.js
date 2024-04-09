const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const dbConfig = require('./config/database.config.js');
mongoose.connect(dbConfig.url, { useNewUrlParser: true })
    .then(() => console.log("Database Connected Successfully!!"))
    .catch(err => {
        console.log('Could not connect to the database', err);
        process.exit();
    });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Routes
const userRoutes = require('./app/routes/User');
app.use('/users', userRoutes);

const UserRoute = require('./app/routes/User')
app.use('/user', UserRoute)