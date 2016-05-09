var countries = require('./test');

countries.readJson('./countries.json',function(data){
	console.log(data);
});