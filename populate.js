const _ = require('lodash');
const fs = require('fs')

const languageMap = {
	A: 110,
	B: 1500,
	C: 99,
	D: 2,
	F: 200,
	G: 5000,
}

const companies = _.reduce(languageMap, function(acc, value, key) {
	const names = _.times(value, () => {
		const secondLetter = ["a", "e", "i", "o", "u"][_.random(0, 4)];
		remaining = Math.random().toString(36).substring(8);

		return key + secondLetter + remaining
	});

  return _.uniq(_.concat(acc, names));
}, []);


fs.writeFileSync("./lib/companies.json", JSON.stringify(companies))
