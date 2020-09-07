const express = require('express')
const hbs = require('hbs');
const app = express()
require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

//Expres HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Emmanuel leiva',
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/data', (req, res) => {
    res.send('Hello Data')
})

app.listen(port, () => {
    console.log('Escuchando puerto 3000');
})