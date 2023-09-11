let express = require('express');
let app = express();
let bodyParser = require('body-parser');
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

app.get("/name", (req,res)=> {
    let firstName = req.query.first
    let lastName = req.query.last
    res.json({"name": `${firstName} ${lastName}`})
})

//app.use(bodyParser.urlencoded({extended: false}))


app.post("/name", bodyParser.urlencoded({extended: false}), (req,res)=> {
    let firstName = req.body.first
    let lastName = req.body.last
    res.json({"name": `${firstName} ${lastName}`})
})






















 module.exports = app;
