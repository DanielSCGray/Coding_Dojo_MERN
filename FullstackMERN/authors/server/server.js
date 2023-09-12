const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();


const port = process.env.PORT;

require('./config/mongoose.config');

app.use(cors(), express.json(), express.urlencoded({extended: true}));


const AuthorRoutes = require('./routes/author.routes');
AuthorRoutes(app);







app.listen( port, () => console.log(`Listening on port: ${port}`) );
