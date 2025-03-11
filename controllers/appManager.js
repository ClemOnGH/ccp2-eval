const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config({ path: '../.env' });
const port = process.env.PORT || 5000;
const { accountRouteHandler, bookRouteHandler, dashboardRouteHandler } = require('../routes/s');
const session = require('express-session');

function connectToMongoose() {
    require('mongoose')
        .connect(process.env.DB_URI)
        .then(() => {
            try {
                console.log('Connected to MongoDB');
            } catch (e) {
                return console.error(e);
            }
        });
}

function launchExpress() {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../', 'views'));
    app.use(express.static(path.join(__dirname, '../', 'public')));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(
        session({
            secret: process.env.SECRET,
            resave: false,
            saveUninitialized: true,
            cookie: { secure: true },
            maxAge: 24 * 60 * 1000,
        })
    );
    app.get('/', (_, res) => {
        try {
            res.write('sup');
            res.end();
        } catch (e) {
            console.error(e);
            res.status(400).json({ message: e });
        }
    });
    app.use('/account', accountRouteHandler);
    app.use('/books', bookRouteHandler);
    app.use('/dashboard', dashboardRouteHandler);
    app.listen(port, (e) => {
        if (e) throw e;
        console.log(`Listening to http://127.0.0.1:${port}`);
    });
}
launchExpress();
connectToMongoose();
