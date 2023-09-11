const mongoose = require('mongoose');

//change all occurance from subject name

const SubjectnameSchema = new mongoose.Schema({
    set_up: {
        type: String,
        required: [true, 'Set up is required'],
        minlength: [5, 'Set up must be at least 5 characters']
    },
    punchline: {
        type: String,
        required: [true, 'Punchline is required'],
        minlength: [2, 'Punchline must be at least 2 characters']
    }
}, {timestamps: true});

const Subjectname = mongoose.model('Subjectname', SubjectnameSchema);

module.exports = Subjectname;
