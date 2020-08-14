const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

exports.helloWorld = functions.https.onRequest((request, response) => {
    
});
