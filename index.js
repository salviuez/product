//import express from "express";


const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", function (request, response) {
    response.send("HI, I'am new server");

})

app.listen(PORT, () => (`The server started in ${PORT}`));



