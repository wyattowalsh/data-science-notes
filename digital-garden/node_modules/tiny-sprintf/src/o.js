/**
 * Typecasts to number, then returns octal string
 * @param {*} value
 * @param {Boolean} caps
 * @returns {String|undefined}
 */
module.exports = function(value, caps) {
	return caps ? undefined : (+value).toString(8);
};