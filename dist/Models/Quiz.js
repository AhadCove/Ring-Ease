'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


_mongoose2.default.Promise = global.Promise;

var QuizSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'Code must be 5 characters or more.']
    },
    name: { type: String },
    email: { type: String },
    so_email: { type: String, required: true },
    ring_color: { type: String },
    ring_metal: { type: String },
    ring_size: { type: Number },
    ring_type: { type: String },
    ring_stone: { type: String },
    ring_stone_shape: { type: String },
    ring_stone_style: { type: String },
    ring_stone_color: { type: String },
    ring_choices: { type: Array },
    createdAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false }
});

// Encryption for Password

var Quiz = _mongoose2.default.model('Quiz', QuizSchema);
exports.default = Quiz;

// code,
//                     name: "Ralph",
//                     email: "ringease@gmail.com",
//                     so_email: this.state.so_email,
//                     ring_color: "silver",
//                     ring_metal: "silver",
//                     ring_size: "5.6",
//                     ring_type: "Wedding Ring",
//                     ring_stone: "diamond",
//                     ring_stone_shape: "square",
//                     ring_stone_style: "gayler",
//                     ring_stone_color: "gayler",
//                     ring_choices: []
//# sourceMappingURL=Quiz.js.map