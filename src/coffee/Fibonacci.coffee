
Math.Fibonacci = (N) ->
    resultAsString = String Math.FibonacciAlgorithm( N )

    return parseInt(resultAsString) if resultAsString.lenght <= 6

    parseInt resultAsString.substr(-6)

Math.FibonacciAlgorithm = (N) ->
    return N if N is 0 or N is 1

    Math.FibonacciAlgorithm( N-1 ) + Math.FibonacciAlgorithm( N-2 )