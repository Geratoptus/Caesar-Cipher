const fs = require("fs");
const russian_frequencies = require("./russian_frequencies");
const russian_alphabet = require("./russian_alphabet");
const getValues = require("./getValues");
const toCode = require("./toCode");
const toDecode = require("./toDecode");
const getCurrentFrequencies = require("./getCurrentFrequencies");
const findShift = require("./findShift"); 

const name_of_file = process.argv[2];
const input_shift = +process.argv[3];

const input_text = fs.readFileSync(name_of_file, "utf-8").toString();
const coded_message = toCode(input_text, input_shift);

const russian_alph_frequencies = getValues(russian_frequencies);
const current_frequencies = getValues(getCurrentFrequencies(coded_message, russian_alphabet));

const found_shift = findShift(russian_alph_frequencies, current_frequencies);
const decoded_message = toDecode(coded_message, found_shift);

console.log(`Decoded message: ${'\n'} ${decoded_message}`)
console.log(`Found shift -  ${found_shift}`);
