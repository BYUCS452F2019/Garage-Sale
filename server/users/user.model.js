const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    user_id: { type: String, unique: true, required: true },
    password: { type: String, unique:false, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    id_photo: { type: Buffer, contentType: String },
    validated: { type: Boolean, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);