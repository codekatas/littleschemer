describe("number games", function() {
	describe("basic stuff", function() {
		it("a number is an atom", function() {
			expect(isAtom(14)).toBe(true);
		});

		it("a negative numbe is an atom", function() {
			expect(isAtom(-3)).toBe(true);
		});

		it("a decimal is a number too", function() {
			expect(isAtom(3.14)).toBe(true);
		});

		it("1 is not zero", function() {
			expect(isZero(1)).toBe(false);
		});
		it("0 is zero", function() {
			expect(isZero(0)).toBe(true);
		});
	});
	describe("adding & subtracting", function() {
		it("can add 1 to a number", function() {
			expect(add1(10)).toEqual(11);
		});
		it("can subtract 1 from a number", function() {
			expect(sub1(10)).toEqual(9);
		});

		it("can add two numbers", function() {
			expect(add(1, 2)).toEqual(3);
		});

		it("can subtract two numbers from each other", function() {
			expect(subtr(5, 2)).toEqual(3);
		});

		it("can not go negative when subtracting a larger number", function() {
			expect(subtr(5, 10)).toBeUndefined();
		});
	});

	describe("summing", function() {
		it("can sum all numbers is a list", function() {
			var t = '(1 4 5 10)';
			var list = t.array();

			expect(sum(list)).toEqual(20);
		});

	});

	describe("multiplication", function() {
		it("can multiply two numbers", function() {
			expect(multiply(4, 5)).toEqual(20);
		});

		it("can multiply two other numbers", function() {
			expect(multiply(3, 12)).toEqual(36);
		});
	});

	describe("tupplus", function() {
		it("can sum each value from the first list to it's consequetive value in the other list", function() {
			var list1 = [1, 2, 3];
			var list2 = [3, 2, 1];

			expect(tupplus(list1, list2)).toEqual([4, 4, 4]);
		});

		it("can not sum lists with different length", function() {
			var list1 = [1];
			var list2 = [1, 2];

			expect(tupplus(list1, list2)).toEqual([2, 2]);
		});
	});

	describe("is greater than", function() {
		it("120 isGreater than 11", function() {
			expect(isGreater(120, 11)).toBe(true);
		});
		it("11 is not Greater than 120", function() {
			expect(isGreater(11, 120)).toBe(false);
		});

		it("6 is greater than 7", function() {
			expect(isGreater(6, 7)).toBe(false);
		});
	});
	describe("is less than", function() {
		it("1 is less than 4", function() {
			expect(isLess(1, 4)).toBe(true);
		});

		it("10 is less than 4", function() {
			expect(isLess(10, 4)).toBe(false);
		});

		it("2 is not less than 2", function() {
			expect(isLess(2, 2)).toBe(false);
		});

		it("5 is not less than 2", function() {
			expect(isLess(5, 2)).toBe(false);
		});
	});

	describe("power", function() {
		it("2 power 3 is 8", function() {
			expect(power(2, 3)).toEqual(8);
		});

		it("5 power 3 is 125", function() {
			expect(power(5, 3)).toEqual(125);
		});
	});
	describe("division", function() {
		it("4 divided by 2 is 2", function() {
			expect(divide(4, 2)).toEqual(2);
		});

		it("15 divided by 4 is 3", function() {
			expect(divide(15, 4)).toEqual(3);
		});

		it("6 divided by 2 is 3", function() {
			expect(divide(6, 2)).toEqual(3);
		});
	});
	describe("length for lat", function() {
		it("the length of [2,3] is 2", function() {
			expect(length([2, 3])).toBe(2);
		});
	});

	describe("pick", function() {
		it("pick(2, [1,2,3]) returns 2", function() {
			expect(pick(2, [1, 2, 3])).toEqual(2);
		});

		it("pick(4, (1,2,3,4,5,6,7) returns 4", function() {
			expect(pick(4, [1, 2, 3, 4, 5, 6, 7])).toEqual(4);
		});
		it("should return the first pos", function() {
			expect(pick(1, [4, 5])).toEqual(4);
		});
	});

	describe("rempick", function() {
		it("cuts out an element of a list", function() {
			var t = '(a b c d)';
			var list = t.array();

			expect(rempick(3, list)).toEqual(['a', 'b', 'd']);
		});

		it("can cut out the second word in a list", function() {
			var t = '(apple bee character double)';
			var list = t.array();

			expect(rempick(2, list)).toEqual(['apple', 'character', 'double']);
		});
	});

	describe("isNumber", function() {
		it("76 is a number", function() {
			expect(isNumber(76)).toBe(true);
		});

		it("apple is not a number", function() {
			expect(isNumber('apple')).toBe(false);
		});
	});

	describe("noNums", function() {
		it("can cut out any number from a list of values", function() {
			var list = ['a', 'b', 3, 'd'];
			expect(noNums(list)).toEqual(['a', 'b', 'd']);
		});
	});

	describe("all-nums", function() {
		it("can cut out all non-numbers from a list of mixed values", function() {
			var list = ['a', 1, 'b', 2, 3, 'd'];

			expect(allNums(list)).toEqual([1, 2, 3]);
		});
	});

	describe("eqan", function() {
		it("two numbers are equal", function() {
			expect(areEqualNumbers(4,4)).toBe(true);
		});

		it("4 is not less than 4", function() {
		  expect(isLess(4,4)).toBe(false);
		});

		it("4 is not greater than 4", function() {
		  expect(isGreater(4,4)).toBe(false);
		});

		it("equan can determine that two non-identical, non-num atoms are NOT equal", function() {
		  var a = 'a', b = 'b';
		  expect(equan(a,b)).toBe(false);
		});

		it("equan can determine that two non-identical, non-num atoms ARE equal", function() {
		  var a = 'a';
		  expect(equan(a,a)).toBe(true);
		});

		it("equan can determine that a is not equal to 4", function() {
		  expect(equan('a', 4)).toBe(false);
		});
	});

	describe("occur", function() {
	  it("can determine how ofter an atom occurs in a lat", function() {
		var list = ['a', 'a', 'b', 2 , 3];	    
		expect(occur('a', list)).toEqual(2);
	  });
	});

	describe("isOne", function() {
	  it("can identify 1", function() {
	    expect(isOne(1)).toBe(true);
	  });
	  it("can identify NOT 1", function() {
	    expect(isOne(0)).toBe(false);
	  });
	  

	});
});



