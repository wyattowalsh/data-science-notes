# Remark Collapse

Find range of a target heading and make it collapsible by `<details>` and `<summary>` like the below.

<details><summary>Open example</summary>

Tada! :tada:

</details>

```markdown
<details><summary>Open example</summary>

Tada! :tada:

</details>
```

## Installation

```sh
npm install remark-collapse
```

## Usage

```js
const processor = remark()
  .use(collapse, {test: 'tango'})

const inputString = [
  '# Heading1',
  '',
  '## tango',
  '',
  'target content',
  '',
  '## Another heading2',
  ''
].join('\n')

const resultString = processor.processSync(inputString).toString()
```

`resultString`

```markdown
# Heading1

## tango

<details><summary>Open tango</summary>

target content

</details>

## Another heading2

```

## API

To find heading range, Remark Collapse uses [mdast-util-heading-range].

### `options.test`  (`string`, `RegExp`, `function(string, Node): boolean`)

**Required**. Test to be passed to [mdast-util-heading-range#heading](https://github.com/syntax-tree/mdast-util-heading-range#headingnode-test-onrun)

> `test` — Heading to look for.  When `string`, wrapped in `new RegExp('^(' + value + ')$', 'i')`;  when `RegExp`, wrapped
    in `function (value) {expression.test(value)}`.

### `options.summary` (`function(string): string`, `string`)

Summarizing function. By default, it uses text of the target heading and prepends `Open ` to it.

```js
function defaultSummarizer (str) {
  return 'Open ' + str
}
```

Example

```js
function defuseTimeBomb (str) {
  return 'Tick... Tock... Tick... Tock...⏱'
}

const processor = remark()
  .use(collapse, {
    test: 'tango',
    summary: defuseTimeBomb
    /* Also, you can provide a string
    summary: 'Tick... Tock... Tick... Tock...⏱'
    */
  })

const inputString = [
  '# tango',
  '',
  '**KABOOM!!**',
  ''
].join()

const resultString = processor.processSync(inputString).toString()
```

`resultString`

```markdown
# tango

<details><summary>Tick... Tock... Tick... Tock...⏱</summary>

**KABOOM!!**

</details>
```

Result

<details><summary>Tick... Tock... Tick... Tock...⏱</summary>

**KABOOM!!**

</details>

## License

MIT © Junyoung Choi

[mdast-util-heading-range]: https://github.com/syntax-tree/mdast-util-heading-range