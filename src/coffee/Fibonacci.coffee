
Math.Fibonacci = (N) ->
    result = Math.FastFibonacciAlgorithm( N )

    return result if result < 1000000

    parseInt String(result).substr(-6)

Math.FibonacciAlgorithm = (N) ->
    return N if N is 1 or N is 0 or N is 5
    return N - 1 if N is 3 or N is 4

    Math.FibonacciAlgorithm( N-1 ) + Math.FibonacciAlgorithm( N-2 )

Math.FastFibonacciAlgorithm = (N) ->
    fibs = Array(0, 1)
    i = N

    while i isnt 0
        fibs.push fibs[0] + fibs[1]
        fibs.shift()
        i--
    fibs[0]