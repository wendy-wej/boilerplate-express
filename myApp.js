let express = require('express');
let app = express();

console.log("Hello World");	

app.get("/", (req, res) => {
    my_path = __dirname + "/views/index.html"
    res.sendFile(my_path)
})

































 module.exports = app;
