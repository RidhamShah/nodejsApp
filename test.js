var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {

	console.log(req.body);
	if (req.body.foo == 'hello')
		res.send('World');
	else
		res.send('Not Hello');
});

app.listen(PORT);
