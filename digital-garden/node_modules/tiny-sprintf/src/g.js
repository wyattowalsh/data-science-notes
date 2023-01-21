/**
 * Does f or e, depending on the size of value.
 * Between <code>131071</code> and <code>-131072</code>, f is done. Outside, e.
 * Based on a preset bitshift action.
 * @param value
 * @param caps
 * @returns {String|undefined}
 */
module.exports = function(value, caps) {
	var v1 = (+value).toExponential(),
		v2 = (+value).toLocaleString();
	value = (v1.length < v2.length) ? v1 : v2;
	return caps ? value.toUpperCase() : value;
};