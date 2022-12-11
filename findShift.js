function findShift(canonical_frequencies, current_frequencies){
	let min_diff = Number.MAX_VALUE;
	let shift = 0;
	
	for (let current_shift = 0; current_shift < canonical_frequencies.length; current_shift++) {
		
		let current_diff = 0;
		
		for (let i = 0; i < canonical_frequencies.length; i++){
			current_diff += Math.pow(canonical_frequencies[i] - current_frequencies[(i + current_shift) % canonical_frequencies.length], 4);
		}
		
		if (current_diff < min_diff){
			min_diff = current_diff;
			shift = current_shift;
			console.log(shift)
			console.log(min_diff);
		}
		
	}
	if (shift >= 24) shift--;
	return shift;
}

module.exports = findShift;