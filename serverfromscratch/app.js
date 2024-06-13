//dependencies
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000
const {engine} = require("express-handlebars");

app.engine('handle-bars',engine())
app.set('view engine', 'handlebars');
app.set('views', './views');

//endpoint
app.get('/', (req, res) => {
    res.render('home')
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/dnd', (req, res) => {
    res.render('dnd',{layout:"newLay"})
});

// //middlewares
// const check=app.use( (req,res,next) => {
//     console.log("this is a middleware")
//     next();
// })

// Endpoint
// app.get('/', (req, res) => {
//     res.send('Welcome to the server')
// })



// app.get('/about', (req, res) => {
//     res.send('<h1>About Page</h1>')
// })
//
// app.get('/home', (req, res) => {
//     res.send('<h1>Home Page</h1>')
// })
//
// //page not found
// app.get('*', (req, res) => {
//     res.send('<h1>Error - 404- Page not Found</h1>')
// })
//
// //listen to a port
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})


