const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const pug = require('pug');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

exports.app = functions.https.onRequest(app);
