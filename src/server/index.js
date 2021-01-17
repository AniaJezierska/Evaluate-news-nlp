const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const bodyParser = require('body-parser');

var aylien = require('aylien_textapi');

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

//start instance of app
const app = express();

//start directory
app.use(express.static('dist'));

app.use(bodyParser.json());

// cors for cross origin allowance
app.use(cors());

//set aylien API credentials
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

console.log(`Your API KEY is ${process.env.API_KEY}`);

let aylienRes = {};

console.log(__dirname);

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('App listening on port 8081!');
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})

app.post('/analyse', function (req, res) {
    textapi.sentiment({
        url: req.body.url
    }, (error, response) => {
        if (error == null) {
            aylienRes = {
                'polarity': response.polarity,
                'subjectivity': response.subjectivity,
                'text': response.text,
                'polarity_confidence': response.polarity_confidence,
                'subjectivity_confidence': response.subjectivity_confidence
            }
            res.send(aylienRes);
            console.log(aylienRes);
        } else {
            console.log('error', error);
            alert('error');
        }
    })
});
