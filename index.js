var split = require('split');

/*
	A split stream [https://github.com/dominictarr/split] with default matcher that converts
	a line with whitespace separated words into a js object based on a supplied keys.
*/

function parseString (str) {
	var re = /(?:")([^"]+)(?:")|([^\s"]+)(?=\s+|$)/g,
		res = [], 
		arr = null;

	while (arr = re.exec(str)) { 
		res.push(arr[1] ? arr[1] : arr[0]); 
	}

	return res;
}

function split2obj (head, opts) {
	if (!Array.isArray(head)) {
		throw new Error('First argument must be an array.');
	} 

	var len = head.length;

	function toObject (line) {
		var obj = {},
			td = parseString(line);

		for (var i = 0; i < len; i += 1) {
			obj[head[i]] = td[i];
		}

		return obj;
	}

	return split(toObject);
}

module.exports = split2obj