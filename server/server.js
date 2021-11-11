const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config/config.js');
const userRoutes = require('./routes/userRoutes.js');
const classRoutes = require('./routes/classRoutes.js');

// Connect to database
const { db: { host, port, name } } = config;
const dbUrl = `mongodb://${host}:${port}/${name}`;
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose
    .connect(dbUrl, dbOptions)
    .then(() => {
        console.log('Connection openned!');
    })
    .catch((err) => {
        console.log(err);
    });

// Set up application
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));

const sessionOptions = {
    name: 'session',
    secret: 'testing',
    resave: false,
    saveUninitialized: true
};
app.use(session(sessionOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up routes
app.use('/', userRoutes);
app.use('/classes', classRoutes);

// Set up listen port
app.listen(config.app.port, () => {
    console.log(`Server connected on port ${config.app.port}`);
});