/**
 * Returns string value only if lowercase s.
 * @param {*} value
 * @param {Boolean} caps
 * @returns {String|undefined}
 */
module.exports = function(value, caps) {
	return caps ? undefined : value+'';
};