var webpack = require('webpack');
var express = require('express');
var path = require('path');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./src/server/routes/api');

mongoose.connect('mongodb://localhost/tasks_rest');

var compiler = webpack(config);
var port = 3000;

var app = express();

app.use('/', dirnameJoin('src/client/templates'));
app.use('/css', dirnameJoin('src/client/css'));
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', routes);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(error) {
  if (error) {
    return console.log(error);
  }
  console.info('Listening in port %s, Open up http://localhost:%s', port, port);
});

function dirnameJoin(pathName) {
  return express.static(path.join(__dirname, pathName));
}
