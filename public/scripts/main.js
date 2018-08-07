requirejs.config({ // initiate the configuration
  paths: {
    jquery: '../../lib/jquery',
    plotly: '../../lib/plotly',
    custom_plotly: './custom_plotly',
    stat: '../../lib/stat',
    quandl: './quandl',
    linearRegression: '../../lib/linearRegression',
    polynomialRegression: '../../lib/polynomialRegression'
  }
  });

  define(
  [
    "jquery",
    "quandl",
    "plotly",
    "custom_plotly",
    "linearRegression",
    "polynomialRegression"
  ],

  function(
  jquery,
  quandl,
  plotly,
  custom_plotly,
  linearRegression,
  polynomialRegression
  ) {
  $('#query').click(function() {
    console.log('clicked');
    let set = $('#dataset').val();
    let base = $('#database').val();
    quandl.getInfo(base, set, function(response) {
          console.log(response);
          custom_plotly.displayRegression(response, polynomialRegression);
      });
    });
});
