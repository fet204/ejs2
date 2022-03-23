const express = require('express');
const app = express();
const port = 3000;

// Here's our test data
var data = require('./data/test.json');

app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'Architecture Home Page';
  res.render('pages/index', {title:title});
});

//add users route
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});

app.get('/GreekRevival', (req, res) => {
  var title = 'Greek Revival Page';
  res.render('pages/GreekRevival', {title:title});
});

app.get('/Brutalist', (req, res) => {
  var title = 'Brutalist Page';
  res.render('pages/Brutalist', {title:title});
});

app.get('/HyperModern', (req, res) => {
  var title = 'HyperModern Page';
  res.render('pages/HyperModern', {title:title});
});

app.get('/Neo', (req, res) => {
  var title = 'Neo Futurism Page';
  res.render('pages/Neo', {title:title});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});