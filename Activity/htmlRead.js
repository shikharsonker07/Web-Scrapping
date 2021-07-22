const fs = require("fs");
// Reading html Data in a String
let htmlData = fs.readFileSync("index.html").toString();


//console.log(htmlData);

const cheerio = require("cheerio");

// get a cheerio object of the entire htmlData
let ch = cheerio.load(htmlData);
//console.log(ch);

let h1 = ch('h1').text();
console.log(h1);