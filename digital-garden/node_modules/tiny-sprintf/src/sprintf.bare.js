var /* method vars */
	r = /%\+?(\d+\$)?(0|'.)?(-)?(\d+)?(\.\d+)?(.)/g;

module.exports = function(str) {
	var value,
		index = 1,
		execMatch,
		tempVar1,
		tempVar2;
	while (execMatch = r.exec(str)) {
		value = execMatch[6];
		if (value == "s") {

			// arg from index
			if ((value = execMatch[1]) && value[(tempVar1 = value.length - 1)] == "$") {
				value = value.substr(0, tempVar1);
			}
			value=arguments[value || index]+'';

			// pad char
			if (tempVar1 = execMatch[2]) {
				if (tempVar1[0] == "'") {
					tempVar1 = tempVar1[1];
				}
			} else {
				tempVar1 = ' ';
			}
			if (tempVar2 = execMatch[4]) while (value.length < tempVar2) {
				value = execMatch[3] ? (value + tempVar1) : (tempVar1 + value);
			}

			// cutoff
			if ((tempVar1 = execMatch[5] && execMatch[5].substr(1)) && value.length > tempVar1) {
				value = execMatch[3] ? value.substr(0, tempVar1) : value.substr(value.length - tempVar1);
			}
			index++;
		}
		str = str.substr(0, tempVar1 = execMatch.index) + value + str.substr(r.lastIndex);
		r.lastIndex = value.length + tempVar1;
	}
	return str;
};