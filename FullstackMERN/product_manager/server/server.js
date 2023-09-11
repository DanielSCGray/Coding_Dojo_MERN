const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
/*
commandline setup: 
npm init -y
npm install mongoose express dotenv

nodemon server.js
*/
app.use(cors());
const port = process.env.PORT;

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended: true}));


const AllProductRoutes = require('./routes/product.routes');
AllProductRoutes(app);







app.listen( port, () => console.log(`Listening on port: ${port}`) );
