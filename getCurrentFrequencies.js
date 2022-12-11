function getCurrentFrequencies(text, alphabet)
{
	let current_frequencies = new Array();
	
	for (let i in alphabet){
		current_frequencies[alphabet[i]] = 0;
	}
	
	for (let i in text){
		if (text.charCodeAt(i) > 'я'.charCodeAt(0) || text.charCodeAt(i) < 'А'.charCodeAt(0)){
			continue;
		}
		current_frequencies[text[i].toLowerCase()]++;
	}
	
	for (let i in current_frequencies)
		current_frequencies[i] = (current_frequencies[i] / text.length) * 100;
	
	return current_frequencies;
}

module.exports = getCurrentFrequencies;