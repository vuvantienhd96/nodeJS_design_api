import express from "express";
const app = express();

app.get('/', (req, res) => {
    console.log('hello express ');
    res.status(200);
    res.json({
        message: 'xinchao'
    })
});

export default app;
