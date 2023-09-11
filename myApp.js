let express = require('express');
let app = express();
require('dotenv').config()

app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip)
    next()
});

console.log("Hello World");	

app.get("/", (req, res) => {
    my_path = __dirname + "/views/index.html"
    res.sendFile(my_path)
});

//Used to render static assets like stylesheets, scripts, images, etc.
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    let message = "Hello json"
    if (process.env.MESSAGE_STYLE === "uppercase") {
        message = message.toUpperCase()
    }
    res.json({"message": message})
});

app.get("/now", (req, res, next) =>{
    req.time = new Date().toString()
    next()
}, (req, res) => {
    res.json({"time": req.time})
})

app.get("/:word/echo", (req, res) => {
    word = req.params.word
    res.json({"echo": word})
})

























 module.exports = app;
