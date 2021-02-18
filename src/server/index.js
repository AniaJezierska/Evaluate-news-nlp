const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const bodyParser = require('body-parser');

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

//start instance of app
const app = express();

//start directory
app.use(express.static('dist'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// cors for cross origin allowance
app.use(cors());

//set API
const apiKey = process.env.API_KEY
const url = 'https://api.meaningcloud.com/sentiment-2.1?'

console.log(`Your API KEY is ${process.env.API_KEY}`);

let apiRes = {};

console.log(__dirname);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('App listening on port 8081!');
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})

app.post('/analyse', async function (req, res) {
    apiRes = req.body.url;
    const result = await fetch(`${url}key=${appKey}&lang=auto&url=${apiRes}`);
    const data = await result.json()
    res.send(data)
})
