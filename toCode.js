function toCode(text, shift){
	let coded_message = "";
	shift = shift % 32;
	for (let i = 0; i < text.length; i++){
		
		let current_code = text.charCodeAt(i);
		let current_symbol = text.charAt(i);
		
		if (current_code > 'я'.charCodeAt(0) || current_code < 'A'.charCodeAt(0)){
			coded_message += current_symbol
			continue;
		}
		
		let new_char_code = current_code + shift;
		
		while (new_char_code > 'я'.charCodeAt(0)){
			new_char_code -= 64;
		}
		coded_message += String.fromCharCode(new_char_code);
	}
	return coded_message;
}

module.exports = toCode;