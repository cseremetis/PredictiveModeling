/** Single Linear Regression model.
  * The most simple implementation using
  * gradient descent.
  */
define( [], function() {
  const a = 0.000003;
  const MAXN = 50000;
  let theta0 = 0;
  let theta1 = 0;

  let h = function(theta0, theta1, theta2, x) {
    return (theta0 + (theta1 * x) + (theta2 * Math.pow(x, 2)));
  };

  let updateTheta = function(theta0, theta1, theta2, x, y) {
    let m = x.length;
    let sum0 = 0;
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < m - 1; i++) {
      let hResult = h(theta0, theta1, theta2, x[i]);
      let num = (hResult - y[i]);
      sum0 += num;
      sum1 += (num * x[i]);
      sum2 += (num * Math.pow(x[i], 2));
    }

    theta0 = theta0 - (a / m) * sum0;
    theta1 = theta1 - (a / m) * sum1;
    theta2 = theta2 - (a / m) * sum2;

    return [theta0, theta1, theta2];
  };

  return {

    hypothesis: function(theta, x) {
      return (theta[0] + (theta[1] * x) + (theta[2] * Math.pow(x, 2)));
    },

    gradient_descent: function(x, y, _callback) {
      let theta0 = 0;
      let theta1 = 0;
      let theta2 = 0;
      for (let i = 0; i < MAXN; i++) {

        let learn = updateTheta(theta0, theta1, theta2, x, y);
        theta0 = learn[0];
        theta1 = learn[1];
        theta2 = learn[2];
      }

      _callback([theta0, theta1, theta2]);
    }
  }
});
