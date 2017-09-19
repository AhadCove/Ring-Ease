'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Models = require('../Models');

var _Models2 = _interopRequireDefault(_Models);

var _mail = require('../mail');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quizController = {};

quizController.ask = function (req, res) {
    console.log("Asking to send email:", req.query.email);
    (0, _mail.askMail)(req.query.email).then(function (response) {
        console.log("Sent successfully");
        return res.status(200).json({
            success: true,
            data: response
        });
    }).catch(function (err) {
        console.log("Could not send email");
        return res.status(500).json({
            message: "Could not send email"
        });
    });
};

quizController.get = function (req, res) {
    console.log("Looking for ring:", req.query.code);
    _Models2.default.Quiz.findOne({ 'code': req.query.code }).then(function (found) {
        if (found) {
            console.log("Successfully found ring", found);
            return res.status(200).json({
                success: true,
                data: found
            });
        } else {
            console.log("Ring does not exist");
            return res.status(500).json({
                message: "Ring does not exist"
            });
        }
    }).catch(function (err) {
        console.log("Failed to find ring", err);
        return res.status(500).json({
            message: "Could not find ring"
        });
    });
};

quizController.check = function (req, res) {
    _Models2.default.Quiz.findOne({ 'code': req.query.code }).then(function (found) {
        console.log(found, "code", req.query.code);
        if (found) {
            console.log("Not allowed", found);
            return res.status(200).json({
                success: false,
                data: false
            });
        } else {
            console.log("Allowed");
            return res.status(200).json({
                success: true,
                data: true
            });
        }
    }).catch(function (err) {
        console.log("Checking Error", err);
        return res.status(500).json({
            message: err
        });
    });
};

quizController.find = function (req, res) {
    _Models2.default.Quiz.findOne({ 'code': req.query.code }).then(function (found) {
        console.log(found, "code", req.query.code);
        if (found) {
            console.log("Found the ring");
            return res.status(200).json({
                success: true,
                data: true
            });
        } else {
            console.log("Did not Find ring", found);
            return res.status(500).json({
                message: "Could not find ring"
            });
        }
    }).catch(function (err) {
        console.log("Checking Error", err);
        return res.status(500).json({
            message: err
        });
    });
};

quizController.add = function (req, res) {
    var _req$body = req.body,
        code = _req$body.code,
        name = _req$body.name,
        email = _req$body.email,
        so_email = _req$body.so_email,
        ring_color = _req$body.ring_color,
        ring_metal = _req$body.ring_metal,
        ring_size = _req$body.ring_size,
        ring_type = _req$body.ring_type,
        ring_stone = _req$body.ring_stone,
        ring_stone_shape = _req$body.ring_stone_shape,
        ring_stone_style = _req$body.ring_stone_style,
        ring_stone_color = _req$body.ring_stone_color,
        ring_choices = _req$body.ring_choices;

    console.log("Post code", req.body);

    // Validation

    var quiz = new _Models2.default.Quiz({
        code: code, name: name, email: email, so_email: so_email, ring_color: ring_color, ring_metal: ring_metal, ring_size: ring_size, ring_type: ring_type, ring_stone: ring_stone, ring_stone_shape: ring_stone_shape, ring_stone_style: ring_stone_style, ring_stone_color: ring_stone_color, ring_choices: ring_choices
    });

    quiz.save().then(function (newQuiz) {
        console.log("Successfully posted quiz", newQuiz);
        var code = newQuiz.code,
            email = newQuiz.email,
            name = newQuiz.name,
            so_email = newQuiz.so_email;

        (0, _mail.sendMail)({ code: code, email: email, name: name, so_email: so_email }).then(function (response) {
            console.log("Success");
            res.status(200).json({
                success: true,
                data: newQuiz
            });
        }).catch(function (err) {
            console.log("Failed at sending email");
            res.status(200).json({
                success: false,
                data: newQuiz
            });
        });
    }).catch(function (err) {
        console.log("Error posting quiz", err);
        res.status(500).json({
            message: err
        });
    });
};

exports.default = quizController;
//# sourceMappingURL=quizController.js.map