'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _quizController = require('./Controllers/quizController');

var _quizController2 = _interopRequireDefault(_quizController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express2.default)();

// Controller Imports


routes.get('/ask', _quizController2.default.ask);

// Code Routes
routes.get('/code', _quizController2.default.get);
routes.get('/code/check', _quizController2.default.check);
routes.get('/code/find', _quizController2.default.find);
routes.post('/code', _quizController2.default.add);

exports.default = routes;
//# sourceMappingURL=routes.js.map