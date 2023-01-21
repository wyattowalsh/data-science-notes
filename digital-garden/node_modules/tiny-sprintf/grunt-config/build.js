var path = require('path'),
	fs = require('fs'),
	UglifyJS = require("uglify-js");

var typeReplace = /module\.exports\s*=\s*/,
	regFalse = /^(false|0|no)$/i;

var tokens = {
	types: "/* type entry */",
	methodVars: "/* method vars */"
};

var paths = {
	src: 'src/sprintf.js',
	srcBare: 'src/sprintf.bare.js',
	srcDoc: 'src/jsdoc.js',
	typeGlob: 'src/?.js',
	destFolderDefault: 'dist',
	destFileDefault: 'sprintf.custom.js'
};

module.exports = function(grunt, ROOT) {
	return {
		"description": "Build "+paths.destFileDefault+" (optional args :[types|bare]:[destPath]:[doMinify])",
		/**
		 * Build script. Run with <code>grunt build</code> to execute.
		 * @param {String} [types="(all)"] - string containing all type conversions you want to include.
		 * Default is all type conversions (single character js files) in the folder <code>type</code>
		 * @param {String} [destPath="dist/sprintf.custom.js"] - pass destination path.
		 * If path points to a dir, <code>"sprintf.custom.js"</code> is added.
		 * @param {String} [doMinify=true] - pass <code>"false"</code>, <code>"0"</code> or
		 * <code>"no"</code> to disable
		 */
		"execute": function(types, destPath, doMinify) {
			types = types ? types.toLowerCase() : '';
			destPath || (destPath = paths.destFolderDefault);
			doMinify = !doMinify || doMinify.search(regFalse) == -1;
			if (grunt.file.isDir(destPath)) {
				// If name does not have an ext, append 'sprintf.custom.js'
				destPath = path.resolve(destPath, paths.destFileDefault);
			}

			var highlightColor = ROOT.style.color,
				arrTypeSrc,
				arrTypeChars,
				outString;

			if (types !== "bare") {
				arrTypeSrc = [];
				arrTypeChars = [];
				readTypeConversions(grunt, types, arrTypeChars, arrTypeSrc);
				outString = grunt.file.read(paths.src).replace(tokens.types, arrTypeSrc.join('\n'));
			} else {
				arrTypeChars = ['s'];
				outString = grunt.file.read(paths.srcBare);
			}
			if (doMinify) {
				outString = outString.replace(/\bundefined\b/g, 'u');
				outString = preMangle(outString, grunt, highlightColor);
				outString = UglifyJS.minify(outString, {
					fromString: true
				}).code;
			} else {
				outString = grunt.file.read(paths.srcDoc) + outString;
			}
			grunt.file.write(destPath, outString);
			grunt.log.writeln(resultMessage(types, arrTypeChars, destPath, doMinify, highlightColor));
		},
		"visible": true
	}
};

/**
 * Searches for the "method vars" comment token in the src. If found, converts regular method
 * occurrences of long method names to global vars (A to Z, caps) at the location of the token.
 * Blindly assumes A to Z are all available, so please reserve them in all code.
 * I don't expect this to ever be a problem.
 * @param {String} src - the source to mangle
 * @param {Grunt} grunt - logger
 * @param {String} h - highlight
 * @returns {String} src, mangled
 */
function preMangle(src, grunt, h) {
	var varNameIndex = 65,
		methods = {},
		regSearchMethods = /\.([a-zA-Z]{5,})/g,
		match,
		methodName,
		vars = [],
		varName,
		reg;

	if (src.indexOf(tokens.methodVars) === -1) {
		// Don't, it would destroy the source
		grunt && grunt.log.writeln("   Pre-mangle aborted (no method var token)"[h]);
		return src;
	}

	while (match = regSearchMethods.exec(src)) {
		if (!methods[match[1]]) {
			methods[match[1]] = 0;
		}
		methods[match[1]]++;
	}

	// Assume 2 hits is always worth it
	for (methodName in methods) {
		if (methods[methodName] > 1) {
			grunt && grunt.log.writeln("   Pre-mangle"[h], methodName, ("(" + methods[methodName] + " occurrences)")[h]);
			reg = new RegExp("\\." + methodName, "g");
			varName = String.fromCharCode(varNameIndex);
			src = src.replace(reg, "["+varName+"]");
			vars.push(varName + "=\"" + methodName + "\",");
			varNameIndex++;
			if (varNameIndex == 91) {
				// 90 is Z: cannot do more
				break;
			}
		}
	}
	src = src.replace(tokens.methodVars, vars.join('\n'));
	return src;
}

/**
 * Read type conversion files (single char files) in the src directory.
 * Checks for each file if its name (w/o ext) is included in typesToInclude.
 * Writes of the remaining files the source into destSrcArray and the name in destCharArray.
 * @param {Grunt} grunt
 * @param {Array} typesToInclude
 * @param {Array} destCharArray
 * @param {Array} destSrcArray
 */
function readTypeConversions(grunt, typesToInclude, destCharArray, destSrcArray) {
	var allPaths = grunt.file.expand(paths.typeGlob),
		typePath,
		typeChar,
		i = 0;
	while (typePath = allPaths[i++]) {
		typeChar = path.basename(typePath)[0].toLowerCase();
		if (!typesToInclude || typesToInclude.indexOf(typeChar) !== -1) {
			destSrcArray.push(grunt.file.read(typePath).replace(typeReplace, 's.' + typeChar + '='));
			destCharArray.push(typeChar);
		}
	}
}

/**
 * Creates result message.
 * @param {String} inputType - the build request
 * @param {Array} typeConversions - types included
 * @param {String} destPath - destination path written to
 * @param {Boolean} min - whether or not minification was done
 * @param {String} h - highlight color
 * @returns {string}
 */
function resultMessage(inputType, typeConversions, destPath, min, h) {
	var byteSize = fs.statSync(destPath)['size'],
		typeMsg = typeConversions.join(','),
		msg;
	switch (inputType) {
		case "bare":
			msg = "Built bare sprintf"[h];
			break;
		default:
			msg = "Built sprintf with type(s) "[h] + typeMsg;
			break;
	}

	return ">> " + msg + " to "[h] + destPath + (" (" + byteSize + " bytes" + (min ? ", minified" : "") + ")")[h];
}