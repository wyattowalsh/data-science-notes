# tiny-sprintf
Tiny but complete.

*   Implements sprintf based on the [php doc][php]. They have some nice examples. 
*   Supports the same type conversions as php now.  
*   Min build (only `s`) is 519B minified, full build (all of php) is 989B minified, bare build is 422B (only `s`, not extendable).
*   You can now make custom builds with Grunt, choosing what type conversions to include.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents

- [Install](#install)
- [Builds](#builds)
- [What does it do](#what-does-it-do)
- [Introduction](#introduction)
  - [Format elements](#format-elements)
  - [type conversions](#type-conversions)
- [Adding conversion types](#adding-conversion-types)
- [Grunt tasks](#grunt-tasks)
  - [Custom build](#custom-build)
  - [Run tests](#run-tests)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```
npm install tiny-sprintf
```

Then, in nodejs:

```
var sprintf = require('tiny-sprintf');
```

## Builds

The repo provides several builds that are updated with each release. They are found in the folder `dist`. Each build will have a develop and minified version.  

Currently, the collection consists of:

*   `sprintf` 
    *   Type conversions: `s` 
    *   Extendible (type conversions can be added at runtime)
    *   Useful for small builds with custom type conversions 
    *   Paths:
        *   __(2358B)__ `require("tiny-sprintf/dist/sprintf")` same as `require("tiny-sprintf")`
        *   __(519B)__ `require("tiny-sprintf/dist/sprintf.min")` 
*   `sprintf.all`
    *   Type conversions: `bcdeEfFgGosxX`
    *   Extendible (type conversions can be added at runtime)
    *   For when you want all options and do not care about file size
    *   Paths:
        *   __(4426B)__ `require("tiny-sprintf/dist/sprintf.all")`
        *   __(989B)__  `require("tiny-sprintf/dist/sprintf.all.min")`
*   `sprintf.bare`
    *   Type conversions: `s`
    *   Not extendible
    *   For when you only want the string formatting features, not the type conversions
    *   Paths:
        *   __(1975B)__ `require("tiny-sprintf/dist/sprintf.bare")`
        *   __(422B)__  `require("tiny-sprintf/dist/sprintf.bare.min")`
     
Custom builds are possible, read 'Custom build' below. 

## What does it do

It makes it easy to create monospace text with indenting and alignment. 

Stuff like this:

```
   name  type        description
   ===== =========== ========================
   a     value...... contains nothing
   ab    property... is important
   abc   method..... deprecated
   test  method..... unused
   toolo method..... too long
   metho method..... method with cut off name
```

Possible with this (for the values of each line):

```javascript
sprintf("  %-5.5s %-'.-11.11s %-25.25s", name, type, description);
```

So if you want that stuff in the console or anywhere in your application, you can use sprintf. 

## Introduction

The sprintf method will receive a string containing sprintf tokens, and any additional arguments you wish to insert at the place of the tokens. Which argument is used depends on the order of arguments vs the order of valid tokens. By default, the first token will get argument 1, the second token argument 2 etc. If you explicitly request an argument using the `index$` notation (see 'Format elements' below), it is still counted as a valid token for what the argument selection is concerned. 

The full token format (where `[]` means optional element) is:
```javascript
"%[+][index$]['padchar][-][minWidth][.maxWidth]type"
```

The simplest and most straightforward token is `"%s"`, as it inputs whatever argument at that place in the text. 

Examples: 

```javascript
sprintf("Place %s into %s", {}, "trash"); // "Place [object Object] into trash"
sprintf("Place %2$s into %1$s", {}, "trash"); // "Place trash into [object Object]"
sprintf("%1$s, %2$s, %2$s, %1$s!", 'left', 'right'); // 'left, right, right, left!'
```

Formatting with `minWidth` and `maxWidth` edits the value, which is the result of typecasting the selected argument to string, right before it is inserted in the text. `minWidth` fills up the value with `padchar`s until it is at least as long as `minWidth` dictates. `maxWidth` will cut off any part of the value that is too large. 

Whether this appending or cutting happens on the left or the right of the value, depends on the `-`: default is left, which gives you a 'right align' effect. Adding the `-` will cause manipulations on the right, which gives you a 'left align' effect. 

Examples:
 
```javascript
// Extend length
sprintf("%5s", 'a'); // '    a'
sprintf("%5s", 'abcdefg'); // 'abcdefg'
sprintf("%-5s", 'a'); // 'a    '
sprintf("%-5s", 'abcdefg'); // 'abcdefg'

// Limit length
sprintf("%.5s", 'abcdefg'); // 'cdefg'
sprintf("%-.5s", 'abcdefg'); // 'abcde'

// Force exact size
sprintf("%5.5s", 'abc'); // '  abc'
sprintf("%5.5s", 'abcdefg'); // 'cdefg'
sprintf("%-5.5s", 'abc'); // 'abc  '
sprintf("%-5.5s", 'abcdefg'); // 'abcde'

// Use pad chars
sprintf("%04s", 10); // "0010"
sprintf("%'#4s", 10); // "##10"
```

### Format elements

```javascript
"%[+][index$]['padchar][-][minWidth][.maxWidth]type"
```

1.  `%` 
    *   defines the start of a substring to interpret. 
2.  `+` 
    *   if type is `d` and positive, prepend value with a `+` character. Not implemented by default.
3.  `index$` 
    *   where index is an integer. 
    *   Points to argument to use as value. 
    *   Default is using an index, starting at 1, that is incremented with each replace done. 
    *   Note: `0$` will point to the string to replace, and you probably don't want that.
4.  `'padchar`
    *   where padchar is a single character of any kind. 
    *   It must be preceded by a single quote (`'`). 
    *   Default is `" "`
    *   Note: define your string with double qoutes and everything will be fine. If padchar is zero (`0`), you can leave out the quote. 
5.  `-` 
    *   If added, the value gets left aligned. 
    *   Default is is right aligned. 
    *   Note: only makes sense with `minWidth` or `maxWidth` defined.
6.  `minWidth` 
    *   where minWidth is an integer. 
    *   If the value (see `index$`) in string form is shorter than this, the rest gets filled up with the padchar. It's added on the left or right of value, depending on the alignment setting (see `-`).
7.  `.maxWidth` 
    *   where maxWidth is an integer. 
    *   If the value with padding is longer than this value, it gets cut off. Alignment is the same as with minWidth.
8.  `type` 
    *   where type is a string `s` or whatever of the full collection of type conversions was included in the build (see type conversions below). 
    *   Does typecasting on the value before it is converted to string. Most of the times, you will probably just want to use `s`

### type conversions

Each type conversion does something to the value it is given. If a character sequence is formatted as a sprintf token but its character does not yield a type conversion method (or result), the character sequence is 'escaped' instead. Which means, one `%` is removed. 

Examples: 

```javascript
// Type casting...
sprintf('%s', 10); // '10'
sprintf('%s', 'abc'); // 'abc'
sprintf('%d', 12); // '12'
sprintf('%d', 'abc'); // 'NaN'

// Escape anything else
sprintf('%%', 1); // '%'
sprintf('%T', 'abc'); // 'T'
```

Explanation of type conversions:

*   `b` 
    *   typecast to number, then convert to binary string
    *   Example: `42` becomes `"101010"`
    *   Uses `Number.prototype.toString(2)`
    *   Using caps (`B`) does not work. 
*   `c` 
    *   typecast to number, then convert to ASCII equivalent char. 
    *   Example: `88` becomes `"X"` (see [ASCII table][ascii] dec to char)
    *   Uses `String.fromCharCode()`
    *   Using caps (`C`) does not work. 
*   `d` 
    *   typecast to number
    *   Example: `"abc"` becomes `"NaN"`
    *   Using caps (`D`) does not work. 
*   `e`
    *   typecast to number, then convert to scientific format. 
    *   Example: `10000` becomes `"1e+4"`
    *   Uses `Number.prototype.toExponential()`
    *   Using caps (`E`) will turn the `e` in the string to `E` 
*   `f`
    *   typecast to number, then use a locale-sensitive notation.
    *   Example: `1234567.89` _may_ turn into `"1.234.567,89"` depending on where and what runs the javascript. Node does not seem to do anything special. 
    *   Uses `Number.prototype.toLocaleString()`
    *   Using caps (`F`) will do the same.  
*   `g`
    *   checks which between `e` and `f` which conversion yields the shortest string, and outputs that string. When equal in length, `f` is favored. 
    *   Example: `100000000` is shorter as `"1e+8"`, but `100000001` is not and (_maybe_) becomes `"100,000,001"`. 
    *   Using caps (`G`) will use `E` and `F` instead.  
*   `o`
    *   typecast to number, then convert to octal number.
    *   Example: `64` becomes `"100"`.
    *   Uses `Number.prototype.toString(8)`
    *   Using caps (`O`) will not work.
*   `s`
    *   typecast to string. 
    *   Note: considering the output of sprintf is a string, this essentially applies to every value. 
    *   Using caps (`S`) will not work.
*   `x`
    *   typecast to number, then convert to hexadecimal number.
    *   Example: `255` becomes `"ff"`
    *   Uses `Number.prototype.toString(16)`
    *   Using caps (`X`) will turn any letters in the string to upper case (`"ff"` becomes `"FF"`). 

## Adding conversion types
Punch functions into the `sprintf` function under the same property as the type character. Lowercase characters only, which will receive both lower- and uppercase. Expect args `value, caps, plusChar` and return the value in the desired format, or `undefined` to reject. You don't have to convert the value to string (unless it is `undefined`).
 
Arguments:

*   `{*} value` - the value for the match, which is an argument passed to sprintf
*   `{Boolean} caps` - whether or not the type character is in caps (`/[A-Z]/`)
*   `{String|undefined} plusChar` - the plus character, or `undefined`

Return:
 
*   `{*|undefined}` - if anything else but `undefined`, the match is accepted and the value is sprintf formatted. If `undefined`, the match is rejected, and escaped like any other 'invalid' character.  

For example, the method of `d` (typecast to Number, add plus if desired, rejects caps) is: 

```javascript
sprintf.d = function(value, caps, plusChar) {
    return caps ? undefined : (plusChar || '') + (+value);
};
```

## Grunt tasks

Enter the sprintf directory, run `npm install`. Make sure you have [Grunt][grunt] installed (globally: `npm install -g grunt-cli`). Run `grunt` for a quick overview. 

### Custom build 

Use `grunt build` to create a custom build. You can define a subset of the available types, or (re)build the bare build if you made changes to the source code.  

Full format (where `[]` means optional): 
```
grunt build[:types][:destPath][:doMinify]
```
Optional arguments: 

*   `types`
    *   String, containig every character of the type conversions to include, or the string sequence `"bare"`.
    *   Note: `"bare"` will trigger the bare build, which contains only `s`.
*   `destPath`
    *   String, containing destination dir and, optionally, file name.
    *   Defaults to `./dist/sprintf.custom.js`
    *   Note: if destPath is a dir, the filename `sprintf.custom.js` will be used
*   `doMinify`
    *   String, where (case-insensitive) `"false"`, `"0"` and `"no"` means `false`. Everything else means `true`, and will cause the build to be minified.
    *   Default is `true`.
    *   Note: aside from using uglify2, it also does some 'pre-mangle' optimizations. Although effective, they do assume `u` and `A` to `Z` are not used as global vars. In return, commonly occurring large property or method names are automatically swapped with vars, notably shrinking the minified build. I am not aware of any uglify2 solution to do this.    

### Run tests

Run `grunt nodeunit` or `npm test`. Watch the results.  

[php]: http://php.net/manual/en/function.sprintf.php "Php sprintf"
[grunt]: http://gruntjs.com/getting-started "Grunt getting started"
[nunit]: https://github.com/caolan/nodeunit "Nodeunit on Github"
[ascii]: http://www.asciitable.com/ "ASCII table"
