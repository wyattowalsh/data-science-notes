/**
 * Typecasts to number, then returns the equivalent ASCII char code.
 * @param {*} value
 * @param {Boolean} caps
 * @returns {String|undefined}
 */
module.exports = function(value, caps) {
	return caps ? undefined : String.fromCharCode(+value);
};