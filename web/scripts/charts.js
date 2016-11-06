var colors = ['#000000', '#1a1aff', '#9966ff', '#ff0066', '#ff9966', '#ffff99', '#99cc00', '#009900', '#66ffcc', '#009999', '#669999', '#999966'];

var chart = c3.generate({
    size: {
        height: 400,
        width: 600
    },
    padding: {
        top: 0,
        right: 0,
        bottom: 0,
        // left: 0
    },
    data: {
        x: 'x',
        y: 'y',
        columns: [
            ['x', '2012', '2013', '2014', '2015', '2016'],
            ['NS Credits', '608117', '644899', '870835', '1022743', '267917']
        ],
        type: 'bar',
        color: function (color, d) {
            return colors[d.index];
        },
    },
    legend: {
        show: false
    },
    bar: {
        width: {
            ratio: 0.3
        }
    },
    axis: {
        y: {
            tick: {
                format: d3.format("$,")
            }
        }
    }
});