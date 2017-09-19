'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var port = 7001;

_app2.default.listen(port, function () {
    console.log("Running on port ", port);
});
//# sourceMappingURL=index.js.map