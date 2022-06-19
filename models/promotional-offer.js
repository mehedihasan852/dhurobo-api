const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    description2: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
}, {
    timestamps: true
});


module.exports = mongoose.model('PromotionalOffer', schema);