const express = require("express");

function userMiddleware(req, res, next) {
    if(username === "admin" && password === "123456") {
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
}

function kidneyMiddleware(req, res, next) {
    if(kidneyId != 1 && kidneyId != 2) {
        res.status(401).send("Unauthorized");
    } else {
        next();
    }
}

const app = express();
app.use(express.json());
// app.use(userMiddleware);
// This is another way. Any routes after this will be protected by the userMiddleware.
// If we use this then we dont need to specify the middleware in the routes

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
    res.send("Health checkup completed");
});

app.get("/kidney-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
    res.send("Kidney checkup completed");
});

app.get("/some-route", (req, res) => {
    res.send("Some route");
});

app.post("/some-route-2", (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneylength = kidneys.length;
    res.send(`You have ${kidneylength} kidneys`);
});

// The issue with the above route is anyone can send any data request
// wit any invalid inputs
// in that case the server will crash + show the error to end user which is
// not secure. So to handle that we use global catches
// global catches go at the end of all the routes defnition and catches any error
// that occurs in the server
app.use(function(err, req, res, next) {
    res.status(500).send("Something broke!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});