describe("chapter 8 - lambda the ultimate", function() {
	describe("rember-f", function() {
		it("rember-f removes all occurences in lists based on a function", function() {

			var list = '(a b c d)'.array();
			var target = 'a';
			var expectedOutcome = ['b', 'c', 'd'];

			expect(rember_f(target, list)).toEqual(expectedOutcome);

		});

		it("rember_f removes all occurences in lists based on a function", function() {

			var list = '(a b c d)'.array();
			var target = 'a';
			var expectedOutcome = ['b', 'c', 'd'];

			expect(rember_f(target, list)).toEqual(expectedOutcome);

		});

		it("rember_f removes all occurences in lists based on a function", function() {

			var list = '(a b c d)'.array();
			var target = 't';
			var expectedOutcome = ['a', 'b', 'c', 'd'];

			expect(rember_f(eq_c(target), list)).toEqual(expectedOutcome);

		});
	});

	describe("eq_c", function() {
		it("return a function that can be used to identify a predefind target", function() {
			var target = 'a';

			expect(eq_c(target)('a')).toBe(true);
			// expect(eq_c(func, target)).toEqual(function(x) {
			// 	return equan(t, x);
			// });
		});
	});

	describe("insertL_f", function() {
		it("inserts an item left to each match based on an injected comparison", function() {
			var t = '(a b c d)';
			var constraint = 'b';
			var el = 'e';
			var list = t.array();

			var expected = ['a', 'e', 'b', 'c', 'd'];

			expect(insertL_f(el, constraint, list)).toEqual(expected);
		});
	});

	describe("insertR_f", function() {
		it("inserts an item right to each match based on an injected comparison", function() {
			var t = '(a b c d)';
			var constraint = 'b';

			var el = 'e';
			var list = t.array();

			var expected = ['a', 'b', 'e', 'c', 'd'];

			expect(insertR_f(el, constraint, list)).toEqual(expected);
		});

		it("removes elements from a list using rember_f", function() {
			var target = 'milk';
			var list = '(cookies milk sugar)';
			expect(isMember(target, list.array())).toBe(true);

			var result = rember(target, list.array());
			expect(isMember(target, result)).toBe(false);
		});
	});

	describe("insert_g", function() {
		it("inserts an item to the left or to the right determined by a flag", function() {
			var t = '(a b c d)';
			var constraint = 'b';
			var el = 'e';
			var list = t.array();

			var expected = ['a', 'b', 'e', 'c', 'd'];
			var func = seqR;

			expect(insert_g(func)(el, constraint, list)).toEqual(expected);
		});
	});

	describe("subst_f", function() {
		it("replaces elements in a list using insert_g", function() {
			var t = '(a b)';
			var target = 'a';
			var el = 'e';
			var list = t.array();

			var expected = ['e', 'b'];
			var test2 = subst_f(el, target, list);

			expect(test2).toEqual(expected);
		});
	});

	describe("rember_f", function() {
		it("removes elements from a list using rember_f", function() {
			var target = 'milk';
			var list = '(cookies milk sugar)'.array();
			var expectedOutcome = ['cookies', 'sugar'];
			expect(rember_f(target, list)).toEqual(expectedOutcome);
		});
	});

	describe("multirember_col", function() {
		it("can do freaky stuff", function() {
			var list = ['a', 'b', 'c', 'd'];
			var target = 'b';


			expect(multirember_col(target, list, non_matched_friend_count)).toEqual(3);

		});
	});

	describe("multiremberLR", function() {
		it("inserts new to the left of oldL and to the right of oldR if oldL & oldR are different", function() {

			var list = '(a b c d)'.array();
			var oldL = 'b';
			var oldR = 'c';
			var atom = 'X';

			var expectedOutcome = ['a', 'X', 'b', 'c', 'X', 'd'];
			expect(multiremberLR(atom, oldL, oldR, list)).toEqual(expectedOutcome);

		});
	});

	describe("multiremberLR_col", function() {
		it("does the same as multiremberLR, but also uses a collector", function() {
			var list = '(b b c b d)'.array();
			var oldL = 'b';
			var oldR = 'c';
			var atom = 'X';

			var col = function(list, countL, countR) {
					return [list, countL, countR];
				};

			var expectedOutcome = [
				['X', 'b', 'X', 'b', 'c', 'X', 'X', 'b', 'd'], 3, 1];

			expect(multiremberLR_col(atom, oldL, oldR, list, col)).toEqual(expectedOutcome);
		});
	});

	describe("isEven", function() {
		it("5 is not even", function() {
			expect(isEven(5)).toBe(false);
		});

		it("10 is even", function() {
			expect(isEven(10)).toBe(true);
		});
	});

	describe("evens only", function() {
		it("filters a list for even numbers and returns the filtered list", function() {
			var list = [
				[9, 1, 2, 8], 3, 10, [
					[9, 9], 7, 6], 2];

			var expectedOutcome = [
				[2, 8], 10, [
					[], 6], 2];
			expect(evensonly(list)).toEqual(expectedOutcome);
		});
	});

	describe("evensonly_col", function() {
		it("can do funky stuff with collections of numbers (sum all the odd numbers)", function() {
			var list = [
				[9, 1, 2, 8], 3, 10, [
					[9, 9], 7, 6], 2];
			
			var result = evensonly_col(list, sum_match);

			//I'm combining asserts as a shortcut; note that all the questions in the book are covered
			var expectedOutcome = [38, 1920,[2,8],10,[[],6],2];
			expect(result.sumOddNumbers).toEqual(38);
			expect(result.productEvenNumbers).toEqual(1920);
			console.log(result);
			expect(result.the_last_friend).toEqual(expectedOutcome);
		});	
	});
});



