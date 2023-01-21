/**
 * Typecasts to number, returns as byte string
 * @param {*} value
 * @param {Boolean} caps
 * @returns {String|undefined}
 */
module.exports = function(value, caps) {
	return caps ? undefined : (+value).toString(2);
};