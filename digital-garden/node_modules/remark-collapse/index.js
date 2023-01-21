const heading = require('mdast-util-heading-range')
const toString = require('mdast-util-to-string')

function defaultSummarizer (str) {
  return 'Open ' + str
}

function isString (str) {
  return typeof str === 'string'
}

function isFunction (fn) {
  return typeof fn === 'function'
}

module.exports = function (opts) {
  if (opts == null || opts.test == null) throw new Error('options.test must be given')

  const summarizer = opts.summary == null
    ? defaultSummarizer
    : isString(opts.summary)
    ? () => opts.summary
    : opts.summary

  if (!isFunction(summarizer)) throw new Error('options.summary must be function')

  return function (node) {
    heading(node, opts.test, function (start, nodes, end) {
      return [
        start,
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '<details>'
            },
            {
              type: 'html',
              value: '<summary>'
            },
            {
              type: 'text',
              value: summarizer(toString(start))
            },
            {
              type: 'html',
              value: '</summary>'
            }
          ]
        },
        ...nodes,
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '</details>'
            }
          ]
        },
        end
      ]
    })
  }
}
