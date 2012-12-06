

describe "Fibonacci X = F(N)", ->


  describe "When N is 0", ->

    it "X should be 0", ->
      expect(Math.Fibonacci(0)).toBe(0)

  describe "When N is 1", ->

    it "X should be 1", ->
      expect(Math.Fibonacci(1)).toBe(1)

  describe "When N is 2", ->

    it "X should be 1", ->
      expect(Math.Fibonacci(2)).toBe(1)

  describe "When N is 3", ->

    it "X should be 2", ->
      expect(Math.Fibonacci(3)).toBe(2)

  describe "When N is 4", ->

    it "X should be 3", ->
      expect(Math.Fibonacci(4)).toBe(3)

  describe "When N is 5", ->

    it "X should be 5", ->
      expect(Math.Fibonacci(5)).toBe(5)

  describe "When N is 8", ->

    it "X should be 21", ->
      expect(Math.Fibonacci(8)).toBe(21)

  describe "When N is 36", ->

    it "X should be 930352", ->
      expect(Math.Fibonacci(36)).toBe(930352)



