const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('This is homepage')
});

app.get('/about', (req, res) => {
    res.send('This is About us page')
});






app.listen(3000, () => console.log('Server Running on port 3000'));