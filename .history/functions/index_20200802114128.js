const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('helloworld');
});

exports.app = functions.https.onRequest(app);
