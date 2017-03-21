var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML rocks</h1>");

var dogUrl = "https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg";
var dogFile = fs.creatWriteStream(__dirname + "/node-dog.jpg");
var request = "https.get(dogUrl, function(response){
      response.pipe(dogFile);
})"
