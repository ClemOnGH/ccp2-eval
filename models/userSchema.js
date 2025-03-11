const userSchema = require('mongoose').Schema({
    user: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user', required: true },
    created_at: { type: Date },
});

module.exports = userSchema;
