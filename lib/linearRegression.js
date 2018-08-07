/** Single Linear Regression model.
  * The most simple implementation using
  * gradient descent.
  */
define([], function() {
  const a = 0.0003;
  const MAXN = 50000;
  let theta0 = 0;
  let theta1 = 0;

  let updateTheta = function(theta0, theta1, x, y) {
    let m = x.length;
    let sum0 = 0;
    let sum1 = 0;
    for (let i = 0; i < m - 1; i++) {
      let num = (h(theta0, theta1, x[i]) - y[i]);
      sum0 += num;
      sum1 += (num * x[i]);
    }

    theta0 = theta0 - (a / m) * sum0;
    theta1 = theta1 - (a / m) * sum1;

    return [theta0, theta1];
  };

  let h = function(theta0, theta1, x) {
    return (theta0 + (theta1 * x));
  };

  return {

    hypothesis: function(theta, x) {
      return theta[0] + theta[1] * x;
    },

    gradient_descent: function(x, y, _callback) {
      let theta0 = 0;
      let theta1 = 0;
      for (let i = 0; i < MAXN; i++) {

        let learn = updateTheta(theta0, theta1, x, y);
        theta0 = learn[0];
        theta1 = learn[1];
      }

       _callback([theta0, theta1]);
    }
  }
});
