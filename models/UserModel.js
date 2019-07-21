const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    forename: String,
    surname: String,
    email: { type: String, require: true },
    password: { type: String, require: true },
    age: Number,
    team: String
});

module.exports = mongoose.model('user', UserSchema);
