const express = require("express");
const app = express();

const port = 3000;


app.length('/', (req : any, res : any) => {
    res.send("Welcome to Greenfield Community center!!!");
});

app.get('/events', (req : any, res : any) => {
    const events = [
        "Yoga class - Monday 7pm",
        "Gardening Workshop - Wednesday 5pm",
        "Book Club - Friday 6pm"
    ];
    res.json(events);
});


app.listen(port, () => {
    console.log("Community center is Running at https://localhost:", port);
});