
var undefined,
	/* method vars */
	r = /%(\+)?(\d+\$)?(0|'.)?(-)?(\d+)?(\.\d+)?(.)/g,
	s = function(str) {
		var value,
			index = 1,
			execMatch,
			tempVar1,
			tempVar2,
			tempVar3;
		while (execMatch = r.exec(str)) {
			value = execMatch[7];

			// arg from index
			if ((tempVar2 = execMatch[2]) && tempVar2[(tempVar1 = tempVar2.length - 1)] == "$") {
				tempVar2 = tempVar2.substr(0, tempVar1);
			}

			if (s[tempVar1 = value.toLowerCase()] &&
				(tempVar3 = s[tempVar1](arguments[tempVar2 || index], /[A-Z]/.test(value), execMatch[1])) !== undefined) {

				value=''+tempVar3;

				// pad char
				if (tempVar1 = execMatch[3]) {
					if (tempVar1[0] == "'") {
						tempVar1 = tempVar1[1];
					}
				} else {
					tempVar1 = ' ';
				}
				if (tempVar2 = execMatch[5]) while (value.length < tempVar2) {
					value = execMatch[4] ? (value + tempVar1) : (tempVar1 + value);
				}

				if ((tempVar1 = execMatch[6] && execMatch[6].substr(1)) && value.length > tempVar1) {
					value = execMatch[4] ? value.substr(0, tempVar1) : value.substr(value.length - tempVar1);
				}
				index++;
			}
			str = str.substr(0, tempVar1 = execMatch.index) + value + str.substr(r.lastIndex);
			r.lastIndex = value.length + tempVar1;
		}
		return str;
	};

/* type entry */

module.exports = s;