/**
 * Typecasts to number, adds plus char if desired.
 * @param {*} value
 * @param {Boolean} caps
 * @param {String} [plusChar]
 * @returns {String|undefined}
 */
module.exports = function(value, caps, plusChar) {
	return caps ? undefined : (plusChar || '') + (+value);
};