'use strict';

var data = require('./data');
var app = require('express')();
var bodyParser = require('body-parser');
const querystring = require('querystring');

var search = require('./search');
var port = process.env.PORT || 3000;

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', async function (req, res) {
  var q = req.query.q;

  let results = await search(data, q);
  res.json(results);
});

//app.get('/user', function (req, res) {
//	db.users.find(function(err, docs) {
//		res.json(docs);
//	});
// });

app.listen(port, function() {
  console.log('Starting node.js on port ' + port);
});
