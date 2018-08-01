/** Multiple Linear Regression model.
  * Makes a prediction based on a series
  * of weighted inputs.
  */
define(["stat"], function(stat) {
	const a;
	const MAXN;

	/** When we introduce multiple variables,
	  * the hypothesis is just the product of
		* the theta and X matrices.
		*/
	let h = function(x, theta) {
		return stat.multiply(theta, x);
	};

	let updateTheta = function(x, theta) {
		//...
	};

	return {
		gradientDescent: function() {
			//...
		}
	}
});
