//change all occurances of subject name. Add or delete routes as required

const SubjectnameController = require('../controllers/subjectname.controller');

module.exports = app => {
    app.get('/api/subjectnames', SubjectnameController.findAllSubjectnames);
    app.get('/api/subjectnames/:id', SubjectnameController.findOneSubjectname);
    app.patch('/api/subjectnames/:id', SubjectnameController.updateSubjectname);
    app.post('/api/subjectnames', SubjectnameController.createSubjectname);
    app.delete('/api/subjectnames/:id', SubjectnameController.deleteOneSubjectname);
    app.put('/api/subjectnames/:id', SubjectnameController.updateSubjectname);
}