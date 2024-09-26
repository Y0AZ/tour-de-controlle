const timeNow = () => dayjs().format('YYYY-MM-DD HH:mm:ss');
const timeTail = () => dayjs().subtract(1, 'm').format('YYYY-MM-DD HH:mm:ss');

const chartAxis = {
  x: {
    type: 'timeseries',
    min: timeTail(),
    max: timeNow(),
    tick: {
      fit: false,
      rotate: -50,
      format: '%Y-%m-%d %H:%M:%S',
    }
  }
}

const chartData = {
  x: 'x',
  xFormat: '%Y-%m-%d %H:%M:%S',
  columns: [
    ['x',],
    ['data1',]
  ]
}

let chart = c3.generate({
    bindto: '#line-chart',
    data: chartData,
    axis: chartAxis,
});

setInterval(() => {
  // redraw time series axis in every second
  chart.axis.min({x: timeTail()});
  chart.axis.max({x: timeNow()});

  chartData.columns[0].push(timeNow());
  chartData.columns[1].push(Math.random());
  chart.load({columns: chartData.columns});
}, 1000)




var gchart1 = c3.generate({
  bindto: '#gauge1',
  data: {
      columns: [
          ['pH', 7.4]
      ],
      type: 'gauge',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
  },
  gauge: {
       label: {
            format: function(value, ratio) {
                return value;
           },
            show: false // to turn off the min/max labels.
        },
    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
   max: 14, // 100 is default
    units: ' pH',
  width: 39 // for adjusting arc thickness
  },
  color: {
      pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
      threshold: {
            unit: 'value', // percentage is default
            max: 200, // 100 is default
          values: [5, 60, 90, 100]
      }
  },
  size: {
      height: 100
  }
});


var gchart2 = c3.generate({
  bindto: '#gauge2',
  data: {
      columns: [
          ['temperature', 20.0]
      ],
      type: 'bar',
      colors: {
        temperature: '#ff0000'
    },
  },
  bar: {
      width: {
          ratio: 1 // this makes bar width 50% of length between ticks
      }
      // or
      //width: 100 // this makes bar width 100px
  },
  size:{
    height:180,
    width:60
  },
  legend: {
    show: false
  },
  axis: {
    y: {
        max: 40,
        min: 0,
        padding: {top:0, bottom:0}
    },
    y2: {
      show: true
    }
  }
});



/*c3.generate({
  bindto: '#gauge2',
  data: {
      columns: [
          ['temperature', 21.3]
      ],
      type: 'gauge',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
  },
  gauge: {
       label: {
            format: function(value, ratio) {
                return value;
           },
            show: false // to turn off the min/max labels.
        },
    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
   max: 30, // 100 is default
    units: ' C',
  width: 39 // for adjusting arc thickness
  },
  color: {
      pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
      threshold: {
            unit: 'value', // percentage is default
            max: 200, // 100 is default
          values: [10, 15, 90, 100]
      }
  },
  size: {
      height: 100
  }
});*/




var barchart = c3.generate({
  bindto: '#barchart',
  data: {
      columns: [
          ['Level', 30]
      ],
      type: 'bar'
  },
  bar: {
      width: {
          ratio: 1 // this makes bar width 50% of length between ticks
      }
      // or
      //width: 100 // this makes bar width 100px
  },
  size:{
    height:300,
    width:60
  },
  legend: {
    show: false
  },
  axis: {
    y: {
        max: 100,
        min: 0,
        padding: {top:0, bottom:0}
    }
  }
});



var gchart3 = c3.generate({
  bindto: '#gauge3',
  data: {
      columns: [
          ['pH', 7.4]
      ],
      type: 'gauge',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
  },
  gauge: {
       label: {
            format: function(value, ratio) {
                return value;
           },
            show: false // to turn off the min/max labels.
        },
    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
   max: 14, // 100 is default
    units: ' pH',
  width: 39 // for adjusting arc thickness
  },
  color: {
      pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
      threshold: {
            unit: 'value', // percentage is default
            max: 200, // 100 is default
          values: [5, 60, 90, 100]
      }
  },
  size: {
      height: 100
  }
});


var gchart4 = c3.generate({
  bindto: '#gauge4',
  data: {
      columns: [
          ['temperature', 21.3]
      ],
      type: 'gauge',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
  },
  gauge: {
       label: {
            format: function(value, ratio) {
                return value;
           },
            show: false // to turn off the min/max labels.
        },
    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
   max: 30, // 100 is default
    units: ' pH',
  width: 39 // for adjusting arc thickness
  },
  color: {
      pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
      threshold: {
            unit: 'value', // percentage is default
            max: 200, // 100 is default
          values: [10, 15, 90, 100]
      }
  },
  size: {
      height: 100
  }
});




var barchart2 = c3.generate({
  bindto: '#barchart2',
  data: {
      columns: [
          ['Level', 91]
      ],
      type: 'bar'
  },
  bar: {
      width: {
          ratio: 1 // this makes bar width 50% of length between ticks
      }
      // or
      //width: 100 // this makes bar width 100px
  },
  size:{
    height:300,
    width:60
  },
  legend: {
    show: false
  },
  axis: {
    y: {
        max: 100,
        min: 0,
        padding: {top:0, bottom:0}
    }
  }
});



var gchart5 = c3.generate({
  bindto: '#gauge5',
  data: {
      columns: [
          ['pH', 9.2]
      ],
      type: 'gauge',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
  },
  gauge: {
       label: {
            format: function(value, ratio) {
                return value;
           },
            show: false // to turn off the min/max labels.
        },
    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
   max: 14, // 100 is default
    units: ' pH',
  width: 39 // for adjusting arc thickness
  },
  color: {
      pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
      threshold: {
            unit: 'value', // percentage is default
            max: 200, // 100 is default
          values: [5, 6, 10, 100]
      }
  },
  size: {
      height: 100
  }
});


var gchart6 = c3.generate({
  bindto: '#gauge6',
  data: {
      columns: [
          ['temperature', 11.8]
      ],
      type: 'gauge',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
  },
  gauge: {
       label: {
            format: function(value, ratio) {
                return value;
           },
            show: false // to turn off the min/max labels.
        },
    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
   max: 30, // 100 is default
    units: ' pH',
  width: 39 // for adjusting arc thickness
  },
  color: {
      pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
      threshold: {
            unit: 'value', // percentage is default
            max: 200, // 100 is default
          values: [10, 15, 90, 100]
      }
  },
  size: {
      height: 100
  }
});




var barchart3 = c3.generate({
  bindto: '#barchart3',
  data: {
      columns: [
          ['Level', 15]
      ],
      type: 'bar',
  },
  bar: {
    width: {
      ratio: 1 // this makes bar width 50% of length between ticks
  }
  // or
  //width: 100 // this makes bar width 100px
  },
  size:{
    height:300,
    width:60
  },
  legend: {
    show: false
  },
  axis: {
    y: {
        max: 100,
        min: 0,
        padding: {top:0, bottom:0}
    }
  }
});

var newdata;
async function updateData() {
  newdata = await eel.get_tank_data()();
  gchart1.load({columns: [['pH',newdata.tank1[1]]]});
  gchart2.load({columns: [['temperature',newdata.tank1[2]]]});
  barchart.load({columns: [['Level',newdata.tank1[0]]]});

  gchart3.load({columns: [['pH',newdata.tank2[1]]]});
  gchart4.load({columns: [['temperature',newdata.tank2[2]]]});
  barchart2.load({columns: [['Level',newdata.tank2[0]]]});

  gchart5.load({columns: [['pH',newdata.tank3[1]]]});
  gchart6.load({columns: [['temperature',newdata.tank3[2]]]});
  barchart3.load({columns: [['Level',newdata.tank3[0]]]});
  
  setTimeout(updateData, 1000);
}

updateData();