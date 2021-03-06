'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ES6 promises
_mongoose2.default.Promise = Promise;

var mongoUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/ring-ease";
// mongodb connection
_mongoose2.default.connect(mongoUrl, {
  useMongoClient: true,
  promiseLibrary: global.Promise
});
var db = _mongoose2.default.connection;

// mongodb error
db.on('error', console.error.bind(console, 'connection error:'));

// mongodb connection open
db.once('open', function () {
  console.log('Connected to Mongo at: ' + new Date());
});

var app = (0, _express2.default)();
app.use(_bodyParser2.default.urlencoded({
  extended: true
}));
app.use(_bodyParser2.default.json());

// Middleware
app.use((0, _cors2.default)());

// Serve static files from the React app
app.use(_express2.default.static(_path2.default.join(__dirname, '../client/build')));

app.use('/api', _routes2.default);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname + '/../client/build/index.html'));
});

exports.default = app;
//# sourceMappingURL=app.js.map