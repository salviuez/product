const fs = require("fs");

const quote = "Arun salviues is a software Fullstack developer";

let date = new Date();
let dateAndTime = date.toLocaleString();
console.log(dateAndTime);


fs.writeFile("./currentdate-Time.txt", dateAndTime, (arr) => {
    console.log(dateAndTime);
})

