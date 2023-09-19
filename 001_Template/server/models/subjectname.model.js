const mongoose = require('mongoose');

//change all occurance from subjectname

const SubjectnameSchema = new mongoose.Schema({
    strkey: {
        type: String,
        required: [true, 'Strkey is required'],
        minlength: [2, 'Strkey must be at least 2 characters']
    },
    strkey: {
        type: String,
        required: [true, 'Strkey is required'],
        minlength: [2, 'Strkey must be at least 2 characters']
    },
    numkey: {
        type: Number,
        required: [true, 'Numkey is required'],
        min: [0, 'Numkey must not be negative']
    },
    boolkey: {
        type: Boolean,
        required: [true, 'Boolkey is required'],
        default: true
    },

}, {timestamps: true});

const Subjectname = mongoose.model('Subjectname', SubjectnameSchema);

module.exports = Subjectname;
