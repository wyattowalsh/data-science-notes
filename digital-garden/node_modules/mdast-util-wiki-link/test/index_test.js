import assert from 'assert'

import fromMarkdown from 'mdast-util-from-markdown'
import toMarkdown from 'mdast-util-to-markdown'
import visit from 'unist-util-visit'

import { syntax } from 'micromark-extension-wiki-link'

import * as wikiLink from '..'

describe('mdast-util-wiki-link', () => {
  context('fromMarkdown', () => {
    it('parses a wiki link that has a matching permalink', () => {
      const ast = fromMarkdown('[[Wiki Link]]', {
        extensions: [syntax()],
        mdastExtensions: [
          wikiLink.fromMarkdown({
            permalinks: ['wiki_link']
          })
        ]
      })

      visit(ast, 'wikiLink', (node) => {
        assert.equal(node.data.exists, true)
        assert.equal(node.data.permalink, 'wiki_link')
        assert.equal(node.data.hName, 'a')
        assert.equal(node.data.hProperties.className, 'internal')
        assert.equal(node.data.hProperties.href, '#/page/wiki_link')
        assert.equal(node.data.hChildren[0].value, 'Wiki Link')
      })
    })

    it('parses a wiki link that has no matching permalink', () => {
      const ast = fromMarkdown('[[New Page]]', {
        extensions: [syntax()],
        mdastExtensions: [
          wikiLink.fromMarkdown({
            permalinks: []
          })
        ]
      })

      visit(ast, 'wikiLink', (node) => {
        assert.equal(node.data.exists, false)
        assert.equal(node.data.permalink, 'new_page')
        assert.equal(node.data.hName, 'a')
        assert.equal(node.data.hProperties.className, 'internal new')
        assert.equal(node.data.hProperties.href, '#/page/new_page')
        assert.equal(node.data.hChildren[0].value, 'New Page')
      })
    })

    it('handles wiki links with aliases', () => {
      const ast = fromMarkdown('[[Real Page:Page Alias]]', {
        extensions: [syntax()],
        mdastExtensions: [
          wikiLink.fromMarkdown({
            permalinks: []
          })
        ]
      })

      visit(ast, 'wikiLink', (node) => {
        assert.equal(node.data.exists, false)
        assert.equal(node.data.permalink, 'real_page')
        assert.equal(node.data.hName, 'a')
        assert.equal(node.data.alias, 'Page Alias')
        assert.equal(node.value, 'Real Page')
        assert.equal(node.data.hProperties.className, 'internal new')
        assert.equal(node.data.hProperties.href, '#/page/real_page')
        assert.equal(node.data.hChildren[0].value, 'Page Alias')
      })
    })

    context('configuration options', () => {
      it('uses pageResolver', () => {
        const identity = (name) => [name]

        const ast = fromMarkdown('[[A Page]]', {
          extensions: [syntax()],
          mdastExtensions: [
            wikiLink.fromMarkdown({
              pageResolver: identity,
              permalinks: ['A Page']
            })
          ]
        })

        visit(ast, 'wikiLink', (node) => {
          assert.equal(node.data.exists, true)
          assert.equal(node.data.permalink, 'A Page')
          assert.equal(node.data.hProperties.href, '#/page/A Page')
        })
      })

      it('uses newClassName', () => {
        const ast = fromMarkdown('[[A Page]]', {
          extensions: [syntax()],
          mdastExtensions: [
            wikiLink.fromMarkdown({
              newClassName: 'new_page'
            })
          ]
        })

        visit(ast, 'wikiLink', (node) => {
          assert.equal(node.data.hProperties.className, 'internal new_page')
        })
      })

      it('uses hrefTemplate', () => {
        const ast = fromMarkdown('[[A Page]]', {
          extensions: [syntax()],
          mdastExtensions: [
            wikiLink.fromMarkdown({
              hrefTemplate: (permalink) => permalink
            })
          ]
        })

        visit(ast, 'wikiLink', (node) => {
          assert.equal(node.data.hProperties.href, 'a_page')
        })
      })

      it('uses wikiLinkClassName', () => {
        const ast = fromMarkdown('[[A Page]]', {
          extensions: [syntax()],
          mdastExtensions: [
            wikiLink.fromMarkdown({
              wikiLinkClassName: 'wiki_link',
              permalinks: ['a_page']
            })
          ]
        })

        visit(ast, 'wikiLink', (node) => {
          assert.equal(node.data.hProperties.className, 'wiki_link')
        })
      })
    })
  })

  context('toMarkdown', () => {
    it('stringifies wiki links', () => {
      const ast = fromMarkdown('[[Wiki Link]]', {
        extensions: [syntax()],
        mdastExtensions: [
          wikiLink.fromMarkdown()
        ]
      })

      const stringified = toMarkdown(ast, { extensions: [wikiLink.toMarkdown()] }).trim()

      assert.equal(stringified, '[[Wiki Link]]')
    })

    it('stringifies aliased wiki links', () => {
      const ast = fromMarkdown('[[Real Page:Page Alias]]', {
        extensions: [syntax()],
        mdastExtensions: [
          wikiLink.fromMarkdown()
        ]
      })

      const stringified = toMarkdown(ast, { extensions: [wikiLink.toMarkdown()] }).trim()

      assert.equal(stringified, '[[Real Page:Page Alias]]')
    })

    context('configuration options', () => {
      it('uses aliasDivider', () => {
        const ast = fromMarkdown('[[Real Page:Page Alias]]', {
          extensions: [syntax()],
          mdastExtensions: [
            wikiLink.fromMarkdown()
          ]
        })

        const stringified = toMarkdown(ast, {
          extensions: [
            wikiLink.toMarkdown({ aliasDivider: '|' })
          ]
        }).trim()

        assert.equal(stringified, '[[Real Page|Page Alias]]')
      })
    })
  })
})
