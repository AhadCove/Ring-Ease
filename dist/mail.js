'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.askMail = exports.sendMail = undefined;

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var service = process.env.MAIL_SERVICE;
var email = process.env.MAIL_EMAIL;
var pass = process.env.MAIL_PASSWORD;
var host = process.env.CLIENT_HOST;
var baseHost = process.env.CLIENT_BASE;

var transporter = _nodemailer2.default.createTransport({
    service: service,
    auth: {
        user: email,
        pass: pass
    }
});

var formatPostings = function formatPostings(_ref) {
    var code = _ref.code,
        sender_email = _ref.sender_email,
        name = _ref.name,
        so_email = _ref.so_email;

    return new Promise(function (resolve, reject) {
        var formatted = '\n            <h3>Your SO, ' + name + ', just took the Ring Ease quiz to make your life easier</h3>\n            <h4>Just enter the code below, or click the link to Review their answers</h4>\n            <div style="font-size:1.7rem"><a href=' + (host + code) + '>' + code + '</a></div>\n            </br>\n            <div>Or just go here <a href=' + host + '>Here</a> enter the code above</div>\n        ';

        var mailOptions = {
            from: email,
            to: so_email,
            subject: name + ' Ring Ease selection',
            html: formatted
        };
        // html: '<h1>Welcome</h1><p>That was easy!</p>'
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                reject("Error", error);
            } else {
                console.log('Email sent: ' + info.response);
                resolve(true);
            }
        });
    });
};

var sendMail = exports.sendMail = function sendMail(config) {
    return new Promise(function (resolve, reject) {
        console.log("Sending Mail");
        formatPostings(config).then(function (res) {
            resolve(true);
        }).catch(function (err) {
            reject("Error sending email");
        });
    });
};

var askMail = exports.askMail = function askMail(so_email) {
    return new Promise(function (resolve, reject) {
        console.log("Sending Mail");
        var formatted = '\n            <h3>Your SO, ' + so_email + ', Want\'s you to take the Ring Ease Quiz</h3>\n            <h2>Click <a href=' + (baseHost + '/quiz') + '>Here</a> to start</h2>\n            <h4>Or navigate to: <a href=' + (baseHost + '/quiz') + '>' + (baseHost + '/quiz') + '</a> and press start quiz</div>\n        ';

        var mailOptions = {
            from: email,
            to: so_email,
            subject: 'Ring Ease Request',
            html: formatted
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                reject("Error", error);
            } else {
                console.log('Email sent: ' + info.response);
                resolve(true);
            }
        });
    });
};
//# sourceMappingURL=mail.js.map