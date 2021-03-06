// Generated by CoffeeScript 1.4.0
(function() {

  Math.Fibonacci = function(N) {
    var result;
    result = Math.FastFibonacciAlgorithm(N);
    if (result < 1000000) {
      return result;
    }
    return parseInt(String(result).substr(-6));
  };

  Math.FibonacciAlgorithm = function(N) {
    if (N === 1 || N === 0 || N === 5) {
      return N;
    }
    if (N === 3 || N === 4) {
      return N - 1;
    }
    return Math.FibonacciAlgorithm(N - 1) + Math.FibonacciAlgorithm(N - 2);
  };

  Math.FastFibonacciAlgorithm = function(N) {
    var fibs, i;
    fibs = Array(0, 1);
    i = N;
    while (i !== 0) {
      fibs.push(fibs[0] + fibs[1]);
      fibs.shift();
      i--;
    }
    return fibs[0];
  };

}).call(this);
