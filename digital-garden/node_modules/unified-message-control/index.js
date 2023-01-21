'use strict'

var location = require('vfile-location')
var visit = require('unist-util-visit')

module.exports = messageControl

function messageControl(options) {
  var settings = options || {}
  var enable = settings.enable || []
  var disable = settings.disable || []
  var sources = settings.source
  var reset = settings.reset

  if (!settings.name) {
    throw new Error('Expected `name` in `options`, got `' + settings.name + '`')
  }

  if (!settings.marker) {
    throw new Error(
      'Expected `marker` in `options`, got `' + settings.marker + '`'
    )
  }

  if (!sources) {
    sources = [settings.name]
  } else if (typeof sources === 'string') {
    sources = [sources]
  }

  return transformer

  function transformer(tree, file) {
    var toOffset = location(file).toOffset
    var initial = !reset
    var gaps = detectGaps(tree, file)
    var scope = {}
    var globals = []

    visit(tree, settings.test, visitor)

    file.messages = file.messages.filter(filter)

    function visitor(node, position, parent) {
      var mark = settings.marker(node)
      var ruleIds
      var verb
      var pos
      var tail
      var index
      var ruleId

      if (!mark || mark.name !== settings.name) {
        return
      }

      ruleIds = mark.attributes.split(/\s/g)
      verb = ruleIds.shift()
      pos = mark.node.position && mark.node.position.start
      tail =
        parent.children[position + 1] &&
        parent.children[position + 1].position &&
        parent.children[position + 1].position.end
      index = -1

      if (verb !== 'enable' && verb !== 'disable' && verb !== 'ignore') {
        file.fail(
          'Unknown keyword `' +
            verb +
            '`: expected ' +
            "`'enable'`, `'disable'`, or `'ignore'`",
          mark.node
        )
      }

      // Apply to all rules.
      if (ruleIds.length) {
        while (++index < ruleIds.length) {
          ruleId = ruleIds[index]

          if (isKnown(ruleId, verb, mark.node)) {
            toggle(pos, verb === 'enable', ruleId)

            if (verb === 'ignore') {
              toggle(tail, true, ruleId)
            }
          }
        }
      } else if (verb === 'ignore') {
        toggle(pos, false)
        toggle(tail, true)
      } else {
        toggle(pos, verb === 'enable')
        reset = verb !== 'enable'
      }
    }

    function filter(message) {
      var gapIndex = gaps.length
      var pos

      // Keep messages from a different source.
      if (!message.source || sources.indexOf(message.source) === -1) {
        return true
      }

      // We only ignore messages if they‘re disabled, *not* when they’re not in
      // the document.
      if (!message.line) {
        message.line = 1
      }

      if (!message.column) {
        message.column = 1
      }

      // Check whether the warning is inside a gap.
      pos = toOffset(message)

      while (gapIndex--) {
        if (gaps[gapIndex].start <= pos && gaps[gapIndex].end > pos) {
          return false
        }
      }

      // Check whether allowed by specific and global states.
      return (
        check(message, scope[message.ruleId], message.ruleId) &&
        check(message, globals)
      )
    }

    // Helper to check (and possibly warn) if a `ruleId` is unknown.
    function isKnown(ruleId, verb, pos) {
      var result = settings.known ? settings.known.indexOf(ruleId) !== -1 : true

      if (!result) {
        file.message(
          'Unknown rule: cannot ' + verb + " `'" + ruleId + "'`",
          pos
        )
      }

      return result
    }

    // Get the latest state of a rule.
    // When without `ruleId`, gets global state.
    function getState(ruleId) {
      var ranges = ruleId ? scope[ruleId] : globals

      if (ranges && ranges.length) {
        return ranges[ranges.length - 1].state
      }

      if (!ruleId) {
        return !reset
      }

      return reset ? enable.indexOf(ruleId) > -1 : disable.indexOf(ruleId) < 0
    }

    // Handle a rule.
    function toggle(pos, state, ruleId) {
      var markers = ruleId ? scope[ruleId] : globals
      var previousState

      if (!markers) {
        markers = []
        scope[ruleId] = markers
      }

      previousState = getState(ruleId)

      if (state !== previousState) {
        markers.push({state: state, position: pos})
      }

      // Toggle all known rules.
      if (!ruleId) {
        for (ruleId in scope) {
          toggle(pos, state, ruleId)
        }
      }
    }

    // Check all `ranges` for `message`.
    function check(message, ranges, ruleId) {
      // Check the state at the message’s position.
      var index = ranges && ranges.length

      while (index--) {
        if (
          ranges[index].position &&
          ranges[index].position.line &&
          ranges[index].position.column &&
          (ranges[index].position.line < message.line ||
            (ranges[index].position.line === message.line &&
              ranges[index].position.column <= message.column))
        ) {
          return ranges[index].state === true
        }
      }

      // The first marker ocurred after the first message, so we check the
      // initial state.
      if (!ruleId) {
        return initial || reset
      }

      return reset ? enable.indexOf(ruleId) > -1 : disable.indexOf(ruleId) < 0
    }
  }
}

// Detect gaps in `tree`.
function detectGaps(tree, file) {
  var children = tree.children || []
  var lastNode = children[children.length - 1]
  var offset = 0
  var gaps = []
  var gap

  // Find all gaps.
  visit(tree, one)

  // Get the end of the document.
  // This detects if the last node was the last node.
  // If not, there’s an extra gap between the last node and the end of the
  // document.
  if (
    lastNode &&
    lastNode.position &&
    lastNode.position.end &&
    offset === lastNode.position.end.offset &&
    trim(file.toString().slice(offset)) !== ''
  ) {
    update()

    update(
      tree && tree.position && tree.position.end && tree.position.end.offset - 1
    )
  }

  return gaps

  function one(node) {
    update(node.position && node.position.start && node.position.start.offset)

    if (!node.children) {
      update(node.position && node.position.end && node.position.end.offset)
    }
  }

  // Detect a new position.
  function update(latest) {
    if (latest === null || latest === undefined) {
      gap = true
    } else if (offset < latest) {
      if (gap) {
        gaps.push({start: offset, end: latest})
        gap = null
      }

      offset = latest
    }
  }
}

function trim(value) {
  return value.replace(/^\s+|\s+$/g, '')
}
