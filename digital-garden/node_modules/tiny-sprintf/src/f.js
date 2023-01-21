/**
 * Typecasts to number, then returns locale aware format (toLocaleString).
 * @param {*} value
 * @returns {string}
 */
module.exports = function(value) {
	return (+value).toLocaleString();
};