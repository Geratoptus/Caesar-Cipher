const russian_frequencies = {
  'а': 8.20041114791246,
  'б': 1.736908779380741,
  'в': 4.621504113216859,
  'г': 1.9664634676138475,
  'д': 3.0624524295261897,
  'е': 8.22838866858281,
  'ё': 0,
  'ж': 1.0644490861255826,
  'з': 1.7117116334353963,
  'и': 6.779509333370405,
  'й': 1.1254870000104265,
  'к': 3.3781987342344064,
  'л': 5.009627047485324,
  'м': 2.960838421998325,
  'н': 6.490002815129409,
  'о': 11.544463405055417,
  'п': 2.629582839527197,
  'р': 4.4238368476111365,
  'с': 5.362082987234604,
  'т': 5.854296200270392,
  'у': 2.718076953821451,
  'ф': 0.2046616457733091,
  'х': 0.8593964501565697,
  'ц': 0.36001508353288314,
  'ч': 1.4441005661538033,
  'ш': 0.9262123302668117,
  'щ': 0.296023021502723,
  'ъ': 0.04283514810708613,
  'ы': 1.9342284981458377,
  'ь': 1.9463057508575718,
  'э': 0.30631909665625184,
  'ю': 0.6131595135734419,
  'я': 2.1984509837313326
};
/*
const russian_alphabet = require("./russian_alphabet");
const fs = require("fs");
function getRussianFrequencies(text, alphabet){
	let current_frequencies = new Object();
	let number_of_letters = 0;
	for (let i in alphabet){
		current_frequencies[alphabet[i]] = 0;
	}
	
	for (let i in text){
		if (text.charCodeAt(i) > 'я'.charCodeAt(0) || text.charCodeAt(i) < 'А'.charCodeAt(0)){
			continue;
		}
		current_frequencies[text[i].toLowerCase()]++;
		text_len++;
	}
	
	for (let i in current_frequencies)
		current_frequencies[i] = (current_frequencies[i] / text_len) * 100;
	
	return current_frequencies;
}
let name_of_file = process.argv[2];
let input_text = fs.readFileSync(name_of_file).toString();
console.log(getRussianFrequencies(input_text, russian_alphabet));
*/
module.exports = russian_frequencies;