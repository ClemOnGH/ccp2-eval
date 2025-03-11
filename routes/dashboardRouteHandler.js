const router = require('express').Router();

router.get('/', (_, res) => {
    try {
        res.render('dashboard/layout');
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: e });
    }
});

module.exports = router;
