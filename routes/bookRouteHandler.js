const router = require('express').Router();
const books = require('mongoose').model('Book', require('../models/bookSchema'), 'books');

router
    .get('/', async (_, res) => {
        try {
            const content = await books.find();
            console.log(content);
            res.render('books/layout', {
                css: ['books/layout'],
            });
        } catch (e) {
            console.error(e);
            res.status(400).json({ message: e });
        }
    })
    .get('/add', (_, res) => {
        try {
            res.render('books/layout', {
                css: ['books/layout'],
            });
            res.end();
        } catch (e) {
            console.error(e);
            res.status(400).json({ message: e });
        }
    })
    .post('/add', async (req, res) => {
        try {
            const newEntry = await books.create(req.body);
            newEntry.save();
            res.redirect('/books');
        } catch (e) {
            console.error(e);
            res.status(400).json({ message: e });
        }
    });

module.exports = router;
