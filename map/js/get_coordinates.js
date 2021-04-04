var Papa = require("./lib/papaparse.min.js");
var fs = require('fs');

var writeFile = function(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
    	if (err) throw err;
    	console.log('Data written to file');
	});

}


fs.readFile("./data/crimes.csv", 'utf-8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  var parsed = Papa.parse(data, {header: true});
  writeFile("./data/crimes.json", JSON.stringify(parsed, null, 2));
  console.log(parsed);
});

console.log("Hello World");
