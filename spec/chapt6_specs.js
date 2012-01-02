describe("shadows-ch6", function() {
	describe("numbered", function() {
		it("(3 + (4 ^ 5)) is numbered", function() {
			var list = [3, '+', [4, '^', 5]];

			expect(isNumbered(list)).toBe(true);
		});

		it("(2 x sausage) is not numbered", function() {
			var list = [2, 'x', 'sausage'];
			expect(isNumbered(list)).toBe(false);
		});


	});

	describe("value", function() {
		it("(value u) where u is 13 should be 13", function() {

			var u = 13;
			expect(value(u)).toEqual(13);
		});

		it("value x where x is (1 + 3) should be 4", function() {
			var x = [1, '+', 3];

			expect(value(x)).toEqual(4);
		});
		it("value x where x is (1 x 3) should be 4", function() {
			var x = [1, 'x', 3];

			expect(value(x)).toEqual(3);
		});

		it("value x where x is (2 ^ 3) should be 4", function() {
			var x = [2, '^', 3];

			expect(value(x)).toEqual(8);
		});

		it("value x where x is (3 x (2 + 3)) should be 15", function() {
			var x = [3, 'x', [2, '+', 3]];
			expect(value(x)).toEqual(15);
		});

		it("value x where x is ((2 + 3) x 3) should be 15", function() {
			var x = [[2, '+', 3], 'x', 3];
			expect(value(x)).toEqual(15);
		});

	
	});
});