const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const contactRoute = require('../routes/contact');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//This is the Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/contac',contactRoute);

//Connecting to MongoDB
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, userUnifiedTopology: true})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

app.listen(port, () => {
    console.log('Server running on port ${port}');
});


