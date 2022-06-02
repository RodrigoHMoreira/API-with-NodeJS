import { usersRouter } from "./routers/users-router";

const express = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");

const app = express();

const Port = 3033;

const HostName = 'http://localhost';

app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(bodyParse.json({ extended: true }));

app.get("/", (req:any, res:any, next: any) => {
    return res.send("welcome!")
});

app.use('/api', usersRouter)

app.listen(Port, () => {
    console.log(`Server running on ${HostName}:${Port}`)
});

