const path = require('path');//express dependencyconst express = require('express');const ejs = require('ejs');//instance of express, initialize appconst app = express();//set our views directoryapp.set('views', path.join(__dirname, 'views'));app.set('view engine', 'ejs');// Add a route to our app that renders our index viewapp.get('/', function(req, res, next) {  res.render('index.ejs', { greeting: 'Hello, my name is Sandra',iceCreamHeader: 'My favorite ice cream flavors are:',iceCream: ['lemon', 'birthday cake', 'vanilla']});});//where to listenconst port = 3000;app.listen(port, () => console.log(`Server listening on ${port}`));