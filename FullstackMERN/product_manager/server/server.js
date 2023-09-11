const express = require('express');
const app = express();

require('dotenv').config();
/*
commandline setup: 
npm init -y
npm install mongoose express dotenv

nodemon server.js
*/

const port = process.env.PORT;

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended: true}));

//replace *subjectname* and uncomment.
// const AllSubjectnameRoutes = require('./routes/Subjectname.routes');
// AllSubjectnameRoutes(app);







app.listen( port, () => console.log(`Listening on port: ${port}`) );
