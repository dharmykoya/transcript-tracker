"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import cors from 'cors';
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
// app.use(cors)
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', function (request, response) {
    response.send('hello there!!');
});
app.listen(4000, function () {
    console.log('listening on port 4000');
});
