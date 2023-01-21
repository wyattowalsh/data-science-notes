document.addEventListener('DOMContentLoaded', function () {

    var mainNodeDiameter = 20;
    var otherNodesDiameter = 17;
    var layoutCoseOptions = {
        name: 'cose',
        padding: 100,
        nodeOverlap: 10,
        idealEdgeLength: function (edge) {
            switch (edge.data().type) {
                case 1 :
                    return 30;
                case 2 :
                case 3 :
                    return 120;
                case 0 :
                default :
                    return 45;
            }
        },
        edgeElasticity: function (edge) {
            switch (edge.data().type) {
                case 1 :
                    return 50;
                case 2 :
                case 3 :
                    return 200;
                case 0 :
                default :
                    return 100;
            }
        },
        nestingFactor: 1.2,
        initialTemp: 1000,
        coolingFactor: 0.99,
        minTemp: 1.0,
        gravity: 1.4
    };

    var cy = cytoscape({
        container: document.getElementById('cy'),

        minZoom: 0.1,
        maxZoom: 3,
        zoom: 0.5,

        style: [
            {
                selector: 'node', // default node style
                style: {
                    "width": mainNodeDiameter + "px",
                    "height": mainNodeDiameter + "px",
                    "overlay-padding": "5px",
                    "overlay-opacity": 0,
                    "z-index": 10,
                    "border-width": 2,
                    "border-opacity": 0
                }
            },
            {
                selector: 'node[type=0]',
                style: {
                    "background-color": "#7CACC2"
                }
            },
            {
                selector: 'node[type=1]',
                style: {
                    "width": otherNodesDiameter + "px",
                    "height": otherNodesDiameter + "px",
                    "background-color": "#969696"
                }
            },
            {
                selector: 'node[type=2]',
                style: {
                    "width": otherNodesDiameter + "px",
                    "height": otherNodesDiameter + "px",
                    "background-color": "#463231"
                }
            },
            {
                selector: "edge", // default edge style
                style: {
                    "curve-style": "unbundled-bezier",
                    "control-point-distance": 30,
                    "control-point-weight": 0.5,
                    "opacity": 0.9,
                    "overlay-padding": "3px",
                    "overlay-opacity": 0,
                    "label": "data(title)",
                    "font-family": "FreeSet,Arial,sans-serif",
                    "font-size": 9,
                    "font-weight": "bold",
                    "text-background-opacity": 1,
                    "text-background-color": "#ffffff",
                    "text-background-padding": 3,
                    "text-background-shape": "roundrectangle",
                    "width": 1
                }
            },
            {
                selector: "edge[type=0]",
                style: {
                    "color": "#AAAAAA",
                    "line-color": '#AAAAAA',
                    "target-arrow-shape": "triangle-backcurve",
                    'target-arrow-color': "#AAAAAA"
                }
            },
            {
                selector: "edge[type=1]",
                style: {
                    "color": "#B659C7",
                    "line-color": '#B659C7',
                    "target-arrow-shape": "triangle-backcurve",
                    'target-arrow-color': "#B659C7"
                }
            },
            {
                selector: "edge[type=2]",
                style: {
                    "color": "#D9952F",
                    "line-color": '#D9952F',
                    'target-arrow-color': "#D9952F"
                }
            },
            {
                selector: "edge[type=3]",
                style: {
                    "color": "#C13131",
                    "line-color": '#C13131',
                    "target-arrow-shape": "triangle-backcurve",
                    'target-arrow-color': "#C13131"
                }
            },
            {
                selector: 'node:selected',
                style: {
                    "border-width": 2,
                    "border-style": "solid",
                    "border-color": "#3f3f3f",
                    "border-opacity": 1
                }
            }
        ],

        layout: layoutCoseOptions,
        elements: sampleDataset
    });

    cy.nodeHtmlLabel([
        {
            query: 'node[type=1]',
            cssClass: 'cy-title',
            valign: "top",
            valignBox: "top",
            tpl: function (data) {
                return '<p class="cy-title__name">' + data.name + '</p>' +
                    '<p  class="cy-title__info">' + data.id + '</p>';
            }
        },
        {
            query: 'node[type=0]',
            cssClass: 'cy-title',
            valign: "top",
            valignBox: "top",
            tpl: function (data) {
                return '<p class="cy-title__main">' + data.name + '</p>';
            }
        },
        {
            query: 'node[type=2]',
            cssClass: 'cy-title',
            valign: "bottom",
            valignBox: "bottom",
            tpl: function (data) {
                return '<p class="cy-title__none">' + data.name + '</p>';
            }
        }
    ]);

    cy.animate({
        zoom: 1
    }, {
        duration: 1300
    });

});