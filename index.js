// This is the main file

var request = require('request');
var cheerio = require('cheerio');

request('https://community.alumni.harvard.edu/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    console.log(html);
  }
});