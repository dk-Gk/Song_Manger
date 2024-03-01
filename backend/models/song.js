const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    album: {
        type: String,
    },
    genre: {
        type: String,
        required: true
    },
    songUrl: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
},
    { timestamps: true }
);

module.exports = mongoose.model('Song', songSchema);
