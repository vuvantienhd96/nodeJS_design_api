"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var auth_1 = require("./modules/auth");
var user_1 = require("./handler/user");
var app = (0, express_1.default)();
var customlogger = function (massage) { return function (req, res, next) {
    console.log("hello from ".concat(massage));
    next();
}; };
app.use((0, cors_1.default)());
// Scott introduces the concept of middleware and installs Morgan, 
//a logging middleware for Express. Middleware is a function that can be called for any request or only specific routes.
// The middleware function calls a next() method when it's complete so the request can finish being processed by the server.
app.use((0, morgan_1.default)('dev'));
// allow client send jaon to serve
app.use(express_1.default.json());
// allow querystring in url
app.use(express_1.default.urlencoded({
    extended: true
}));
app.use(customlogger('Custom logger'));
// add middle ware
// app.use((req, res, next) => {
//     res.status(401);
//     res.send('Nope');
//     //next();
// });
app.get('/', function (req, res) {
    console.log('hello express ');
    res.status(200);
    res.json({
        message: 'xinchao'
    });
});
app.use('/api', auth_1.protect, router_1.default);
// npx prisma studio
app.post('/user', user_1.CreateNewUser);
app.post('/signin', user_1.SignIn);
exports.default = app;
//# sourceMappingURL=server.js.map