function toDecode(text, shift){
	let decoded_message = "";
	for (let i = 0; i < text.length; i++){
		
		let current_symbol = text.charAt(i);
		let current_code = text.charCodeAt(i);
		
		if (current_code > 'я'.charCodeAt(0) || current_code < 'А'.charCodeAt(0)){
			decoded_message += current_symbol;
			continue
		}
		let new_char_code = current_code - shift;
		
		while (new_char_code < 'А'.charCodeAt(0)){
			new_char_code = new_char_code + 64;
		}
		
		decoded_message += String.fromCharCode(new_char_code);
	}
	return decoded_message;
}
module.exports = toDecode;