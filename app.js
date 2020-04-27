var express = require('express')
var app = express()
app.use(express.json())

var admin = require("firebase-admin");

// Firebase Admin initialization
var serviceAccount = require("./aispushnotification-server-key.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


app.post('/', function (req, res) {

    var message = req.body;
    admin.messaging().send(message)
    .then((response) => {
        console.log('Successfully sent message:', response);
    })
    .catch((error) => {
        console.log('Error sending message:', error);
    });

    res.send('ok');
  })

app.get('/', (req, res, next) => {
    res.send('Post message to send it to mobile');
});


app.listen(8333, () => {
  console.log('server started...');
})