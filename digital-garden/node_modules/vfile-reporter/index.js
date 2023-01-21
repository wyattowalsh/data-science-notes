'use strict'

var supported = require('supports-color').stderr.hasBasic
var width = require('string-width')
var stringify = require('unist-util-stringify-position')
var repeat = require('repeat-string')
var statistics = require('vfile-statistics')
var sort = require('vfile-sort')

module.exports = reporter

var push = [].push

// `log-symbols` without chalk:
/* istanbul ignore next - Windows. */
var chars =
  process.platform === 'win32'
    ? {error: '×', warning: '‼'}
    : {error: '✖', warning: '⚠'}

var labels = {
  true: 'error',
  false: 'warning',
  null: 'info',
  undefined: 'info'
}

// Report a file’s messages.
function reporter(files, options) {
  var settings = options || {}
  var one

  if (!files) {
    return ''
  }

  // Error.
  if ('name' in files && 'message' in files) {
    return String(files.stack || files)
  }

  // One file.
  if (!('length' in files)) {
    one = true
    files = [files]
  }

  return format(transform(files, settings), one, settings)
}

function transform(files, options) {
  var index = -1
  var rows = []
  var all = []
  var sizes = {}
  var messages
  var offset
  var message
  var messageRows
  var row
  var key

  while (++index < files.length) {
    messages = sort({messages: files[index].messages.concat()}).messages
    messageRows = []
    offset = -1

    while (++offset < messages.length) {
      message = messages[offset]

      if (!options.silent || message.fatal) {
        all.push(message)

        row = {
          location: stringify(
            message.location.end.line && message.location.end.column
              ? message.location
              : message.location.start
          ),
          label: labels[message.fatal],
          reason:
            (message.stack || message.message) +
            (options.verbose && message.note ? '\n' + message.note : ''),
          ruleId: message.ruleId || '',
          source: message.source || ''
        }

        for (key in row) {
          sizes[key] = Math.max(size(row[key]), sizes[key] || 0)
        }

        messageRows.push(row)
      }
    }

    if ((!options.quiet && !options.silent) || messageRows.length) {
      rows.push({type: 'file', file: files[index], stats: statistics(messages)})
      push.apply(rows, messageRows)
    }
  }

  return {rows: rows, stats: statistics(all), sizes: sizes}
}

function format(map, one, options) {
  var enabled = options.color == null ? supported : options.color
  var lines = []
  var index = -1
  var stats
  var row
  var line
  var reason
  var rest
  var match

  while (++index < map.rows.length) {
    row = map.rows[index]

    if (row.type === 'file') {
      stats = row.stats
      line = row.file.history[0] || options.defaultName || '<stdin>'

      line =
        one && !options.defaultName && !row.file.history[0]
          ? ''
          : (enabled
              ? '\x1b[4m' /* Underline. */ +
                (stats.fatal
                  ? '\x1b[31m' /* Red. */
                  : stats.total
                  ? '\x1b[33m' /* Yellow. */
                  : '\x1b[32m') /* Green. */ +
                line +
                '\x1b[39m\x1b[24m'
              : line) +
            (row.file.stored && row.file.path !== row.file.history[0]
              ? ' > ' + row.file.path
              : '')

      if (!stats.total) {
        line =
          (line ? line + ': ' : '') +
          (row.file.stored
            ? enabled
              ? '\x1b[33mwritten\x1b[39m' /* Yellow. */
              : 'written'
            : 'no issues found')
      }

      if (line) {
        if (index && map.rows[index - 1].type !== 'file') {
          lines.push('')
        }

        lines.push(line)
      }
    } else {
      reason = row.reason
      match = /\r?\n|\r/.exec(reason)

      if (match) {
        rest = reason.slice(match.index)
        reason = reason.slice(0, match.index)
      } else {
        rest = ''
      }

      lines.push(
        (
          '  ' +
          repeat(' ', map.sizes.location - size(row.location)) +
          row.location +
          '  ' +
          (enabled
            ? (row.label === 'error'
                ? '\x1b[31m' /* Red. */
                : '\x1b[33m') /* Yellow. */ +
              row.label +
              '\x1b[39m'
            : row.label) +
          repeat(' ', map.sizes.label - size(row.label)) +
          '  ' +
          reason +
          repeat(' ', map.sizes.reason - size(reason)) +
          '  ' +
          row.ruleId +
          repeat(' ', map.sizes.ruleId - size(row.ruleId)) +
          '  ' +
          (row.source || '')
        ).replace(/ +$/, '') + rest
      )
    }
  }

  stats = map.stats

  if (stats.fatal || stats.warn) {
    line = ''

    if (stats.fatal) {
      line =
        (enabled
          ? '\x1b[31m' /* Red. */ + chars.error + '\x1b[39m'
          : chars.error) +
        ' ' +
        stats.fatal +
        ' ' +
        (labels.true + (stats.fatal === 1 ? '' : 's'))
    }

    if (stats.warn) {
      line =
        (line ? line + ', ' : '') +
        (enabled
          ? '\x1b[33m' /* Yellow. */ + chars.warning + '\x1b[39m'
          : chars.warning) +
        ' ' +
        stats.warn +
        ' ' +
        (labels.false + (stats.warn === 1 ? '' : 's'))
    }

    if (stats.total !== stats.fatal && stats.total !== stats.warn) {
      line = stats.total + ' messages (' + line + ')'
    }

    lines.push('', line)
  }

  return lines.join('\n')
}

// Get the length of `value`, ignoring ANSI sequences.
function size(value) {
  var match = /\r?\n|\r/.exec(value)
  return width(match ? value.slice(0, match.index) : value)
}
