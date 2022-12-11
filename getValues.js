function getValues(dict){
	let values = new Array();
	for (let i in dict){
		values.push(dict[i]);
	}
	return values;
}

module.exports = getValues;