"use strict";

describe('base', function () {
  var cy;
  var layoutOptions = {
    name: 'grid',
    cols: 3
  };

  beforeAll(function () {
    document.body.innerHTML += '<div id="cy"></div>';
    cy = cytoscape({
      container: document.getElementById('cy'),
      layout: layoutOptions,
      elements: {
        nodes: []
      }
    });
  });

  function isCyDefinedTest() {
    expect(cy).toBeDefined();
  }

  function isMainDefinedTest() {
    isCyDefinedTest();
    expect(typeof cy.nodeHtmlLabel).toEqual('function');
  }

  function getWrapDiv() {
    return document.querySelector('#cy').firstElementChild.getElementsByTagName('div')[0];
  }

  function cyInitPlugin() {
    cy.nodeHtmlLabel([
      {
        query: '.l1',
        wrapCssClasses: 'cy-title',
        tpl: function (data) {
          return '<p class="cy-title__p1">' + data.id + '</p>' + '<p  class="cy-title__p2">' + data.name + '</p>';
        }
      },
      {
        query: '.l2',
        positionX: 'right',
        wrapCssClasses: 'cy-title cy-title_right',
        tpl: function (data) {
          return '<p class="cy-title__p1">' + data.id + '</p>' + '<p class="cy-title__p2">' + data.name + '</p>';
        }
      }
    ]);
  }

  function cyUpdateElements() {
    cy.json({
      elements: [
        {data: {id: 'a1', name: 'a1'}, classes: 'l1'},
        {data: {id: 'a2', name: 'a2'}, classes: 'l2'},
        {data: {id: 'a3', name: 'a3'}, classes: 'l3'}
      ]
    });
    cy.layout(layoutOptions).run();
  }

  it('cy was defined', function () {
    isCyDefinedTest();
  });

  it('nodeHtmlLabel was defined in cy', function () {
    isMainDefinedTest();
  });

  it('nodeHtmlLabel can init', function () {
    cyInitPlugin();
    expect(getWrapDiv().childNodes.length).toEqual(0);
    isMainDefinedTest();
  });

  it('nodeHtmlLabel can reinit', function () {
    cyInitPlugin();
    cyUpdateElements();
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100;
    setTimeout(function () {
      expect(getWrapDiv().childNodes.length).toEqual(2);
      isMainDefinedTest();
    }, 50)
  });
});
