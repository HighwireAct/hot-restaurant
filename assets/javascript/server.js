// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//intialize the two arrays
var resverations = [];

var waitList = [];

// start on the home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../index.html"))
})

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "../../tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "../../reserve.html"));
});

app.get("/api/tables", function (req, res) {
    res.json(resverations);
})

app.get("/api/waitlist", function (req, res) {
    res.json(waitList);
})

// BOOKING
app.post("/reserve", function (req, res) {
    var booking = req.body;
    console.log("BOOKINGGGGGG: ", booking);

    if (resverations.length < 5) {
        resverations.push(booking);
        // alert("Table is ready for you!");

    } else {
        waitList.push(booking)
        // alert("You are on the wait list!!!");
    }
})



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
