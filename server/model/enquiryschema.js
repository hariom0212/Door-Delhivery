const mongoose = require('mongoose');
const EnquirySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    movefrom: {
        type: String,
        required: true
    },
    moveto: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
})

const Enquiry = mongoose.model('USERENQ', EnquirySchema);
module.exports = Enquiry;