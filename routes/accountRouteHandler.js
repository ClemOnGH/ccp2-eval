const router = require('express').Router();

router.get('/auth', (_, res) => {
    try {
        res.render('account/auth', {
            css: ['account/auth'],
        });
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: e });
    }
});

module.exports = router;
