const router = require('express').Router();
const books = require('mongoose').model('Book', require('../models/bookSchema'), 'books');

router
    .get('/', async (_, res) => {
        try {
            const content = await books.find();
            res.render('books/layout', {
                css: ['books/layout', 'books/book_cards'],
                components: ['navbar', 'book_list'],
                scripts: ['books/book_card_click'],
                data: content,
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
                components: ['navbar', 'form'],
                scripts: ['books/form'],
            });
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
    })
    .get('/:id', async (req, res) => {
        try {
            res.render('layout', {
                css: ['books/layout'],
                components: ['navbar', 'book_display'],
                data: await books.findOne({ _id: req.params.id }),
            });
        } catch (e) {
            console.error(e);
            res.status(400).json({ message: e });
        }
    });

module.exports = router;
