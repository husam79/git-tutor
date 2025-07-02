const express = require('express');

const app = express();

console.log(1);

app.get('/', (req, res, next) => {
    res.json({'message': 'ok'});
});

app.get('/test', (req, res, next) => {
    res.json({'message': 'ok'});
});

app.get('/test', (req, res, next) => {
    res.json({'message': 'ok'});
});

app.listen(3000, () => console.log('listening on port 3000'));

