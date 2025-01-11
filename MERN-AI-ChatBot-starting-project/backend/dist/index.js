import express from 'express'; // import express
var app = express(); // create express app
app.get("/hello", function (req, res, next) {
    return res.send("Hello");
});
app.listen(5003, function () { return console.log('server started'); });
