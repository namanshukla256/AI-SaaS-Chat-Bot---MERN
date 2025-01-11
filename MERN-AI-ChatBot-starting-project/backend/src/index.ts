import express from 'express'; // import express

const app = express();  // create express app

app.get("/hello", (req, res, next) => {
    return res.send("Hello");
});

app.listen(5003, () => console.log('server started'));