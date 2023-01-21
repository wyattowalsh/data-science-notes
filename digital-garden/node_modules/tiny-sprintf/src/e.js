/**
 * Typecasts to number, then return 'scientific notation' (toExponential)
 * @param {*} value
 * @param {Boolean} caps
 * @returns {String|undefined}
 */
module.exports = function(value, caps) {
	value = (+value).toExponential();
	return caps ? value.toUpperCase() : value;
};