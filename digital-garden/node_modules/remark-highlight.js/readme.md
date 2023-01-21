# remark-highlight.js

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**remark**][remark] plugin to highlight code blocks with [highlight.js][hljs]
(via [**lowlight**][lowlight]).

> This package integrates with [`remark-html`][remark-html].
> It may be better to work with [**rehype**][rehype], which is specifically made
> for HTML, and to use [`rehype-highlight`][rehype-highlight] instead of this
> package.

## Install

[npm][]:

```sh
npm install remark-highlight.js
```

## Use

Say we have the following Markdown file, `example.md`:

```markdown
~~~css
h1 {
  color: red;
}
~~~
```

And our script, `example.js`, looks as follows:

```js
const vfile = require('to-vfile')
const report = require('vfile-reporter')
const unified = require('unified')
const markdown = require('remark-parse')
const html = require('remark-html')
const highlight = require('remark-highlight.js')

unified()
  .use(markdown)
  .use(highlight)
  .use(html)
  .process(vfile.readSync('example.md'), (err, file) => {
    console.error(report(err || file))
    console.log(String(file))
  })
```

Now, running `node example` yields:

```html
example.md: no issues found
<pre><code class="hljs language-css"><span class="hljs-selector-tag">h1</span> {
  <span class="hljs-attribute">color</span>: red;
}</code></pre>
```

## API

### `remark().use(highlight[, options])`

highlight code blocks with [highlight.js][hljs] (via
[**lowlight**][lowlight]).

For a list of languages that you can pass to these options, see the
[highlight.js documentation][list-of-languages].

##### `options`

###### `options.include`

If this option is defined (`Array`), this plugin will only highlight languages
that *are* in this list.

###### `options.exclude`

If this option is defined (`Array`), this plugin will only highlight languages
that *are not* in this list.

###### `options.prefix`

If this option is defined (`string`), this plugin will use this prefix
for classes instead of `hljs-`.

## Security

Use of `remark-highlight.js` *should* be safe to use as `lowlight` *should* be
safe to use.
When in doubt, use [`rehype-sanitize`][sanitize].

## Related

*   [`remark-midas`](https://github.com/remarkjs/remark-midas)
    — Highlight CSS code blocks with midas (rehype compatible)
*   [`remark-tree-sitter`](https://github.com/samlanning/remark-tree-sitter)
    — Highlight code with tree-sitter (rehype compatible)
*   [`remark-code-frontmatter`](https://github.com/samlanning/remark-code-frontmatter)
    — Extract frontmatter from markdown code blocks
*   [`remark-code-extra`](https://github.com/samlanning/remark-code-extra)
    — Add to or transform the HTML output of code blocks (rehype compatible)
*   [`rehype-highlight`][rehype-highlight]
    — [rehype][] plugin to highlight code (via lowlight)
*   [`rehype-prism`](https://github.com/mapbox/rehype-prism)
    — [rehype][] plugin to highlight code (via refractor)
*   [`rehype-shiki`](https://github.com/rsclarke/rehype-shiki)
    — [rehype][] plugin to highlight code with shiki

## Contribute

See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Ben Briggs][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/remarkjs/remark-highlight.js/master.svg

[build]: https://travis-ci.org/remarkjs/remark-highlight.js

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-highlight.js.svg

[coverage]: https://codecov.io/github/remarkjs/remark-highlight.js

[downloads-badge]: https://img.shields.io/npm/dm/remark-highlight.js.svg

[downloads]: https://www.npmjs.com/package/remark-highlight.js

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-highlight.js.svg

[size]: https://bundlephobia.com/result?p=remark-highlight.js

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/remark

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/master/contributing.md

[support]: https://github.com/remarkjs/.github/blob/master/support.md

[coc]: https://github.com/remarkjs/.github/blob/master/code-of-conduct.md

[license]: license

[author]: http://beneb.info

[remark]: https://github.com/remarkjs/remark

[remark-html]: https://github.com/remarkjs/remark-html

[rehype]: https://github.com/rehypejs/rehype

[rehype-highlight]: https://github.com/rehypejs/rehype-highlight

[lowlight]: https://github.com/wooorm/lowlight

[hljs]: https://github.com/highlightjs/highlight.js

[list-of-languages]: https://github.com/highlightjs/highlight.js/blob/master/docs/css-classes-reference.rst#language-names-and-aliases

[sanitize]: https://github.com/rehypejs/rehype-sanitize
