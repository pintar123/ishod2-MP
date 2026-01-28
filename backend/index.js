const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/hello', (request, response) => {
    return response.send('Hello world');
});
app.get('/index', (request, response) => {
    return response.sendFile(path.join(__dirname,'public/index.html'));
});
app.get('/login', (request, response) => {
    return response.sendFile(path.join(__dirname,'public/login.html'));
});
app.post('/getkontakt', (request, response) => {
    return response.send('GET metoda -> Read');
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});