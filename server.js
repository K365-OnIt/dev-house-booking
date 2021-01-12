app = require('express');

app.get('/', (request, response) =>{
    response.send('index.html')
})

app.get('/home', (request, response) =>{
    response.send('index.html')
})