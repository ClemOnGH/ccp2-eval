const router = require('express').Router();
const Joi = require('joi');
const userSchema = require('mongoose').model('User', require('../models/userSchema'), 'users');

const authSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'fr', 'org'] } })
        .required(),
});

router.post('/endpoint', async (req, res) => {
    try {
        const email = req.body.email;
        const emailCheck = await authSchema.validate({ email: email });
        if (emailCheck.error) {
            console.log(emailCheck.error);
            console.error('Wrong email format');
            return null;
        }
        const userExists = await userSchema.findOne({ email: email });
        res.json({ exists: userExists });
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: e });
    }
});

module.exports = router;
