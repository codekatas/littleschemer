describe("chapter9 - And again and again", function() {
  describe("looking for stuff", function() {
    describe("keep_looking", function() {
      it("keeps looking until it finds a match", function() {
        var list = [6, 2, 4, 'caviar', 5, 7,3];

        var pos = 7;
        var target = "caviar";

        expect(keep_looking(target, pos, list)).toBe(true);
      });
    });
  });

  describe("looking", function() {
    it("can tell whether a target is in a list", function() {
       var list = [6, 2, 4, 'caviar', 5, 7,3];

        var target = "caviar";

        expect(looking(target, list)).toBe(true);
    });
  });

  describe("shift", function() {
    it("moves the second atom of the first pair in a list into the next list", function() {
      var list =[['a','b'], 'c'];

      expect(shift(list)).toEqual(['a',['b', 'c']]);
    });

    it("shifts from [[a, b],[c, d]] to [a, [b],[c, d]]", function() {
      var list = [['a', 'b'],['c', 'd']];
      var expectedOutcome = ['a', ['b',['c', 'd']];

      expect(shift(list)).toEqual(expectedOutcome);
    });
  });
});