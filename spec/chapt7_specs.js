describe("firends and relations-ch7", function() {
	describe("set", function() {
		it("(a b a d) is not a set", function() {
			var list = ['a', 'b', 'a', 'd'];
			expect(isSet(list)).toBe(false);
		});

		it("(a b c d) is a set", function() {
			var list = ['a', 'b', 'c', 'd'];
			expect(isSet(list)).toBe(true);
		});

	});

	describe("makeset", function() {
		it("makeset lat where lat is (a b a c d) should return (a b c d)", function() {
			var list = ['apple', 'peach', 'pear', 'peach', 'plum', 'apple', 'lemon', 'peach'];

			var expectedOutcome = ['apple', 'peach', 'pear', 'plum', 'lemon'];
			expect(makeset(list)).toEqual(expectedOutcome);
		});
	});

	describe("subset", function() {
		it("when set1 is ( a b) and set2 is (a b c d) then isSubset(set1, set2) is true", function() {
			var set1 = ['a', 'b'];
			var set2 = ['a', 'b', 'c', 'd'];

			expect(isSubset(set1, set2)).toBe(true);
		});

		it("when set1 is ( a b a c a) and set2 is (a b c d) then isSubset(set1, set2) is true", function() {
			var set1 = ['a', 'b', 'a', 'c', 'a'];
			var set2 = ['a', 'b', 'c', 'd'];

			expect(isSubset(set1, set2)).toBe(true);
		});

		it("when set1 is ( a e) and set2 is (a b c d) then isSubset(set1, set2) is true", function() {
			var set1 = ['a', 'e'];
			var set2 = ['a', 'b', 'c', 'd'];

			expect(isSubset(set1, set2)).toBe(false);
		})
	});

	describe("eqset", function() {
		it("when set1 is (a b) and set2 is (a b) then eqset(set1, set2) is true", function() {
			var set1 = ['a', 'b'];
			var set2 = ['a', 'b'];

			expect(eqset(set1, set2)).toBe(true);
		});

		it("when set1 is (a a) and set2 is (a b) then eqset(set1, set2) is false", function() {
			var set1 = ['a', 'a'];
			var set2 = ['a', 'b'];

			expect(eqset(set1, set2)).toBe(false);
		});
	});

	describe("intersect", function() {
		it("when set1 is (a b c) and set2 is (b e f) then intersect(set1, set2) is true", function() {
			var set1 = ['a', 'b', 'c'];
			var set2 = ['b', 'e', 'f'];

			expect(doesIntersect(set1, set2)).toBe(true);
		});

		it("when set1 is (a c) and set2 is (b e f) then intersect(set1, set2) is false", function() {
			var set1 = ['a', 'c', 'g'];
			var set2 = ['b', 'e', 'f'];

			expect(doesIntersect(set1, set2)).toBe(false);
		});
	});

	describe("union", function() {
		it("when set1 is (a b c) and set2 is (b e f) then union results in (a c b e f)", function() {
			var set1 = ['a', 'b', 'c'];
			var set2 = ['b', 'e', 'f'];

			var expectedOutcome = ['a', 'c', 'b', 'e', 'f']

			expect(union(set1, set2)).toEqual(expectedOutcome);
		});
	});

	describe("intersectall", function() {
		it("intersectall x where x is ((a b)(a c)(a d)) returns (a)", function() {
			var list = [
				['1', 'a', 'b', 'e'],
				['2', 'a', 'b', 'e'],
				['3', 'a', 'd', 'e']
			];

			var expectedOutcome = ['a', 'e'];

			expect(intersectall(list)).toEqual(expectedOutcome);
		});
	});

	describe("isPair", function() {
		it("((2) (1)) is a pair", function() {
			var list = [
				['2'],
				['1']
			];

			expect(isPair(list)).toBe(true);
		});
	});

	describe("first", function() {
		it("returns the first s-expression", function() {
			var list = [
				['1'],
				['2']
			];
			var expectedOutcome = ['1'];
			expect(frst(list)).toEqual(expectedOutcome);
		});
	});

	describe("scnd", function() {
		it("return the second s-expression in a list", function() {
			var list = [
				['1'],
				['2']
			];
			var expectedOutcome = ['2'];
			expect(second(list)).toEqual(expectedOutcome);
		});
	});

	describe("build", function() {
	  it("build two s-expressions together", function() {
	    var s1 = 'a';
	    var s2 = 'b';

	    expect(build(s1, s2)).toEqual(['a', 'b']);

	  });
	});

	describe("third", function() {
	  it("returns the third s-expression in a list", function() {
	    	var list = [
				['1'],
				['2'],
				['3']
			];
			var expectedOutcome = ['3'];
			expect(third(list)).toEqual(expectedOutcome);
	  });
	});
});