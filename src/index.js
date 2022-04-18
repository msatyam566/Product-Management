const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route');
const mongoose = require('mongoose');
const multer = require('multer')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())
app.use('/', route);

mongoose.connect("mongodb+srv://msatyam566:5RKuruCHR4gM2ZDi@cluster0.dqzcc.mongodb.net/groupdatabase09?retryWrites=true&w=majority", {useNewUrlParser: true})
.then(() => console.log('MongoDB is connected'))
.catch(err => console.log('Connection error'))

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000));
});

