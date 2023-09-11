let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World");	

app.get("/", (req, res) => {
    my_path = __dirname + "/views/index.html"
    res.sendFile(my_path)
});

//Used to render static assets like stylesheets, scripts, images, etc.
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req,res) =>{
    if(process.env.MESSAGE_STYLE === "uppercase"){
    const response = {"message": "HELLO JSON"}
    res.json(response)
} else {
    const response = {"message": "Hello json"}
    res.json(response)
}
});






























 module.exports = app;
