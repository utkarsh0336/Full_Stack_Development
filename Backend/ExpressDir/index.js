const express = require("express");
const app = express();
console.dir(app);
let port = 8080;
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});


app.get("/",(req,res) =>{
    res.send("Hello I am root");
});

app.get("/:username",(req,res) =>{
    let {username,id} = req.params;
    res.send(`Welcome to the page of ApnaCollege @${username}`);
    console.log(req.query);
    // console.log(req.params);
});

app.get("/search",(req,res) =>{
    res.send("No results");
});
