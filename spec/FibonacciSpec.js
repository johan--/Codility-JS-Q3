// Generated by CoffeeScript 1.4.0
(function() {

  describe("Fibonacci X = F(N)", function() {
    describe("When N is 0", function() {
      return it("X should be 0", function() {
        return expect(Math.Fibonacci(0)).toBe(0);
      });
    });
    describe("When N is 1", function() {
      return it("X should be 1", function() {
        return expect(Math.Fibonacci(1)).toBe(1);
      });
    });
    describe("When N is 2", function() {
      return it("X should be 1", function() {
        return expect(Math.Fibonacci(2)).toBe(1);
      });
    });
    describe("When N is 3", function() {
      return it("X should be 2", function() {
        return expect(Math.Fibonacci(3)).toBe(2);
      });
    });
    describe("When N is 4", function() {
      return it("X should be 3", function() {
        return expect(Math.Fibonacci(4)).toBe(3);
      });
    });
    describe("When N is 5", function() {
      return it("X should be 5", function() {
        return expect(Math.Fibonacci(5)).toBe(5);
      });
    });
    describe("When N is 8", function() {
      return it("X should be 21", function() {
        return expect(Math.Fibonacci(8)).toBe(21);
      });
    });
    return describe("When N is 36", function() {
      return it("X should be 930352", function() {
        return expect(Math.Fibonacci(36)).toBe(930352);
      });
    });
  });

}).call(this);
