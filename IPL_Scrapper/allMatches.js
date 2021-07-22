const request = require("request");
const cheerio = require("cheerio");

function getAllMatches(link) {
  request(link, function (error, response, data) {
    processData(data);
  });
}
function processData(html) {
  // get the links of all matches
  let ch = cheerio.load(html);
  let aTags = ch('a[data-hover="Summary"]');
  console.log(aTags.length);
  for (let i = 0; i < aTags.length; i++) {
    let matchLink = "https://www.espncricinfo.com" + ch(aTags[i]).attr("href");
    console.log(matchLink);
  }
}

module.exports = getAllMatches;
