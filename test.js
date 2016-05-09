var fs = require('fs');
var countryName = process.argv[2];

function readJson(filename, callback) {

	fs.readFile(filename,'utf8', function(err,data) {

		if(err) {
			throw err;
		};

		var jsondata = 	JSON.parse(data);
		
		jsondata.forEach(function(country) {

			if(country.name == countryName){
				console.log(country.name + '\n' + country.topLevelDomain);
			}
});
		});
};
	


module.exports.readJson = readJson;