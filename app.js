const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const dotenv = require('dotenv');


const connectDB = require('./Config/db');

dotenv.config({ path: './Config/config.env'});

connectDB();

app.use('/', require('./routes/index'));


app.listen(3000); 