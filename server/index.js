const express = require('express');
const path = require('path');
const fileRoute = require('./routes/file');
require('./db/db')

const app = express();

app.use(express.static(path.join(__dirname, '..', 'build')))
app.use(fileRoute)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
});

app.listen(3002, () => {
    console.log('server running...')
})