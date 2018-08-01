/** This is where we define our plot functions.
  * Each plot function is determined
  * based on the data-model its using.
  */
define(["jquery", "plotly"], function(jquery, plotly) {
  return {
    displayRegression: function(dataset, lib) {
      let xSeries1 = [];
      let xSeries2 = [];
      let ySeries1 = [];
     	let ySeries2 = [];
     	let counter = 0;

      $.each(dataset, function(index, d) {
        xSeries2.push(counter);
      	xSeries1.push(d[0]);
      	ySeries1.push(d[1]);
      	counter++;
      });

      let trace1 = {
      	x: xSeries1,
      	y: ySeries1,
      	type: "scatter",
      	name: "Real Values"
    	};

      console.log(ySeries1);
      lib.gradient_descent(xSeries2, ySeries1, function(t) {
        console.log(t);
        $.each(xSeries2, function(index, h) {
          ySeries2.push(lib.hypothesis(t, h));
        });

        console.log(ySeries2);
        let trace2 = {
          x: xSeries1,
          y: ySeries2,
          type: "scatter",
          name: "Regression Estimate"
        };

        plotly.newPlot("display", [trace1, trace2]);
      });
    }
  }
});
