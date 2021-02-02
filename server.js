const express = require("express");
const app = express();
const cors = require("cors");
const _ = require("lodash");

app.use(cors());
app.use(express.static("public"));


// Routes
app.get("/", (request, response)=>{ 
    response.sendFile('./public/views/index.html', {root: __dirname})
})
app.get("/booking", (request, response)=>{ 
    response.sendFile('./public/views/Booking.html', {root: __dirname})
})
app.get("/location", (request, response)=>{ 
    response.sendFile('./public/views/Location.html', {root: __dirname})
})
app.get("/pricing", (request, response)=>{ 
    response.sendFile('./public/views/Pricing.html', {root: __dirname})
})
app.get("/sign-up", (request, response)=>{ 
    response.sendFile('./public/views/Sign-Up.html', {root: __dirname})
})

app.use((request, response)=> {
    response.sendFile('./public/views/404.html', {root: __dirname})
})

const litsen = app.listen(3000, ()=>{

console.log("litsening to port " + litsen.address().port)
})
