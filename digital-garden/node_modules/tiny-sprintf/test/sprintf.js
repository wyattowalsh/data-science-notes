var sprintf = require('../dist/sprintf.all.min.js'),
	sprintf_bare = require('../dist/sprintf.bare.min.js');

module.exports = {

	"sprintf": merge(baseSuite(sprintf),{
		"type": function(test) {
			test.equal(sprintf('%b', 5), '101', 'b converts to binary');
			test.equal(sprintf('%B', 5), 'B', 'B does not work');
			test.equal(sprintf('%c', 88), 'X', 'c converts to ascii char');
			test.equal(sprintf('%C', 88), 'C', 'C does not work');
			test.equal(sprintf('%d', 12), '12', "d converts to number");
			test.equal(sprintf('%d', 'abc'), 'NaN', 'd converts non-number to NaN');
			test.equal(sprintf('%D', 10), 'D', 'D does not work');
			test.equal(sprintf('%e', '10'), '1e+1', 'e converts toExponential');
			test.equal(sprintf('%E', '10'), '1E+1', 'E converts toExponential (caps)');
			//test.equal(sprintf('%f', 13.4)) // depends on running context, meh
			test.equal(sprintf('%g', '1000000'), '1e+6', 'g converts toExponential at e+6');
			test.equal(sprintf('%g', '-1000000'), '-1e+6', 'g converts toExponential at e+6 (negative)');
			test.equal(sprintf('%G', '1000000'), '1E+6', 'G converts toExponential at e+6 (caps)');
			test.equal(sprintf('%o', 255), '377', 'o converts to octal');
			test.equal(sprintf('%O', 255), 'O', 'O does not work');
			test.equal(sprintf('%s', 10), '10', "s converts to string");
			test.equal(sprintf('%S', 'okay'), 'S', 'S does not work');
			test.equal(sprintf('%x', 255), 'ff', 'x converts to hexadecimal');
			test.equal(sprintf('%X', 255), 'FF', 'X converts to hexadecimal (caps)');
			test.done();
		},

		"plusChar": function(test) {
			test.equal(sprintf('%+d', 10), "+10", 'works with d');
			test.equal(sprintf('%+s', 10), "10", 'does not work with s');
			test.done();
		}
	}),

	"sprintf.bare": baseSuite(sprintf_bare)
};

function baseSuite(sprintf){
	return {
		"argIndex": function(test) {
			test.equal(sprintf('%2$s%1$s', 'a', 'b'), 'ba', 'selectable args by index');
			test.done();
		},

		"minSpace": function(test) {
			test.equal(sprintf("%5s", 'a'), '    a', 'defaults to right aligned');
			test.equal(sprintf("%-5s", 'a'), 'a    ', 'add - causes left align');
			test.done();
		},

		"maxSpace": function(test) {
			test.equal(sprintf("%.5s", 'abcdef'), 'bcdef', 'defaults to right aligned');
			test.equal(sprintf("%-.5s", 'abcdef'), 'abcde', 'add - causes left align');
			test.equal(sprintf("%5.4s", 'abc'), ' abc', 'cuts off minSpace as well');
			test.equal(sprintf("%-5.4s", 'abc'), 'abc ', 'cuts off minSpace (left align)');
			test.done();
		},

		"padchar": function(test) {
			test.equal(sprintf("%04s", 10), "0010", "Zero char");
			test.equal(sprintf("%'#4s", 10), "##10", "Custom char");
			test.equal(sprintf("%'#-4s", 10), "10##", "Left aligned char");
			test.done();
		},

		"escape": function(test) {
			test.equal(sprintf("%%%Y%a%r", 123), "%Yar", "Escapes anything else");
			test.equal(sprintf("%%s%s%s"), "%sundefinedundefined", "Escapes with lastIndex");
			test.done();
		},

		"empty": function(test) {
			test.equal(sprintf("%s"), "undefined", "At least it is consistent");
			test.done();
		},

		"multi": function(test) {
			test.equal(sprintf("%1$s, %2$s, %2$s, %1$s!", 'left', 'right'), "left, right, right, left!", 'can select by index');
			test.done();
		}
	}
}


function merge(target) {
	var i = 1, obj;
	while (obj = arguments[i++]) {
		for (var name in obj) {
			target[name] = obj[name];
		}
	}
	return target;
}