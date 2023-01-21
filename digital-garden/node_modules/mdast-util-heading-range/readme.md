# mdast-util-heading-range

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**mdast**][mdast] utility to use headings as ranges.

## Install

[npm][]:

```sh
npm install mdast-util-heading-range
```

## Use

Say we have the following file, `example.md`:

```markdown
# Foo

Bar.

# Baz
```

And our script, `example.js`, looks as follows:

```js
var vfile = require('to-vfile')
var remark = require('remark')
var heading = require('mdast-util-heading-range')

remark()
  .use(plugin)
  .process(vfile.readSync('example.md'), function(err, file) {
    if (err) throw err
    console.log(String(file))
  })

function plugin() {
  return transform

  function transform(tree) {
    heading(tree, 'foo', mutate)
  }

  function mutate(start, nodes, end) {
    return [
      start,
      {type: 'paragraph', children: [{type: 'text', value: 'Qux.'}]},
      end
    ]
  }
}
```

Now, running `node example` yields:

```markdown
# Foo

Qux.

# Baz
```

## API

### `heading(tree, test|options, onrun)`

Search `tree` ([`Node`][node]) and transform a section without affecting other
parts with `onrun` ([`Function`][onrun]).
A “section” is a heading that passes `test`, until the next heading of the same
or lower depth, or the end of the document.
If `ignoreFinalDefinitions: true`, final definitions “in” the section are
excluded.

##### `options`

###### `options.test`

Heading to look for (`string`, `RegExp`, [`Function`][test]).
When `string`, wrapped in `new RegExp('^(' + value + ')$', 'i')`;
when `RegExp`, wrapped in `function (value) {expression.test(value)}`

###### `options.ignoreFinalDefinitions`

Ignore final definitions otherwise in the section (`boolean`, default: `false`).

#### `function test(value, node)`

Function invoked for each heading with its content (`string`) and `node`
itself ([`Heading`][heading]) to check if it’s the one to look for.

###### Returns

`Boolean?`, `true` if this is the heading to use.

#### `function onrun(start, nodes, end?, scope)`

Callback invoked when a range is found.

##### Parameters

###### `start`

Start of range ([`Heading`][heading]).

###### `nodes`

Nodes between `start` and `end` ([`Array.<Node>`][node]).

###### `end`

End of range, if any ([`Node?`][node]).

###### `scope`

Extra info (`Object`):

*   `parent` ([`Node`][node]) — Parent of the range
*   `start` (`number`) — Index of `start` in `parent`
*   `end` (`number?`) — Index of `end` in `parent`

## Security

Improper use of `onrun` can open you up to a [cross-site scripting (XSS)][xss]
attack as the value it returns is injected into the syntax tree.
This can become a problem if the tree is later transformed to [**hast**][hast].
The following example shows how a script is injected that could run when loaded
in a browser.

```js
function onrun(start, nodes, end) {
  return [start, {type: 'html', value: 'alert(1)'}, end]
}
```

Yields:

```markdown
# Foo

<script>alert(1)</script>

# Baz
```

Either do not use user input in `onrun` or use [`hast-util-santize`][sanitize].

## Related

*   [`mdast-zone`](https://github.com/syntax-tree/mdast-zone)
    — comments as ranges or markers instead of headings

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/syntax-tree/mdast-util-heading-range.svg

[build]: https://travis-ci.org/syntax-tree/mdast-util-heading-range

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-util-heading-range.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-util-heading-range

[downloads-badge]: https://img.shields.io/npm/dm/mdast-util-heading-range.svg

[downloads]: https://www.npmjs.com/package/mdast-util-heading-range

[size-badge]: https://img.shields.io/bundlephobia/minzip/mdast-util-heading-range.svg

[size]: https://bundlephobia.com/result?p=mdast-util-heading-range

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/HEAD/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/HEAD/support.md

[coc]: https://github.com/syntax-tree/.github/blob/HEAD/code-of-conduct.md

[mdast]: https://github.com/syntax-tree/mdast

[node]: https://github.com/syntax-tree/unist#node

[onrun]: #function-onrunstart-nodes-end-scope

[heading]: https://github.com/syntax-tree/mdast#heading

[test]: #function-testvalue-node

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[hast]: https://github.com/syntax-tree/hast

[sanitize]: https://github.com/syntax-tree/hast-util-sanitize
