
const PORT = 8000;
const express = require('express');
const app = express();
const router = require('./route')
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/', router)

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

>>>>>>> 19088dca9dca72b43470d5494692fad836ca9ce2
app.listen(PORT, ()=>{console.log("connected to server : "+ PORT) })