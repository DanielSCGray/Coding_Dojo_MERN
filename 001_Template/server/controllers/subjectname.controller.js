//use change all occurances of subjectname. Add or remove functions as needed
const Subjectname = require('../models/subjectname.model');



// get all

module.exports.findAllSubjectnames = (req, res) => {
    Subjectname.find()
        .then((allSubjectnames) => {
            res.json({subjectnames: allSubjectnames})
        })
        .catch(err =>res.json(err));
}

// get one

module.exports.findOneSubjectname = (req, res) => {
    Subjectname.findOne({_id: req.params.id})
        .then((oneSubjectname) => {
            res.json({subjectname: oneSubjectname})
        })
        .catch(err =>res.json(err));
}

// create

module.exports.createSubjectname = (req, res) => {
    Subjectname.create(req.body)
        .then(newSubjectname => {
            res.json({subjectname: newSubjectname})
        })
        .catch(err =>res.status(400).json(err));
}

//update 

module.exports.updateSubjectname = (req, res) => {
    Subjectname.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((updatedSubjectname) => {
            res.json({subjectname: updatedSubjectname})
        })
        .catch(err =>res.status(400).json(err));
}


// delete one

module.exports.deleteOneSubjectname = (req, res) => {
    Subjectname.findByIdAndDelete(req.params.id)
        .then((deletedSubjectname) => {
            res.json({subjectname: deletedSubjectname})
        })
        .catch(err =>res.json(err));
}