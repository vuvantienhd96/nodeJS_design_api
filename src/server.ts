import express from "express";
import router from "./router";
import morgan from 'morgan';
import cors from 'cors';
import { protect } from "./modules/auth";
import { CreateNewUser, SignIn } from "./handler/user";

const app = express();

const customlogger = (massage) => (req, res, next) => {
    console.log(`hello from ${massage}`);
    next();
}

app.use(cors());

// Scott introduces the concept of middleware and installs Morgan, 
//a logging middleware for Express. Middleware is a function that can be called for any request or only specific routes.
// The middleware function calls a next() method when it's complete so the request can finish being processed by the server.
app.use(morgan('dev'));

// allow client send jaon to serve
app.use(express.json());

// allow querystring in url
app.use(express.urlencoded({
    extended: true
}));


app.use(customlogger('Custom logger'));

// add middle ware
// app.use((req, res, next) => {
//     res.status(401);
//     res.send('Nope');
//     //next();
// });

app.get('/', (req, res) => {
    console.log('hello express ');
    res.status(200);
    res.json({
        message: 'xinchao'
    })
});

app.use('/api', protect,  router);

// npx prisma studio
app.post('/user', CreateNewUser);
app.post('/signin', SignIn);

export default app;
