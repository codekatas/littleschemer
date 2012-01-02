// describe("chapter 5 functions", function() {
// 	describe("remberStar", function() {
// 		it("remberStar removes all occurrences of an atom in a list of lists", 
// 		});
// 	});
// });
describe("chpt 5 'star functions'", function() {
	describe("remberStar", function() {
		it("remberStar removes all occurrences of an atom in a list of lists", function() {
			var list = [
				["coffee"], "cup", [
					["tea"], "cup"],
				["and", ["hick"]], "cup"];

			var target = 'cup';
			expect(remberStar(target, list)).toEqual([
				["coffee"],
				[
					["tea"]
				],
				["and", ["hick"]]
			]);

		});
	});

	describe("insertRStar", function() {
		it("inserts an atom to the right of each occurence of a target atom in a list of lists", function() {

			var list = [
				["coffee"], "cup", [
					["tea"], "cup"],
				["and", ["hick"]], "cup"];

			var target = "cup";
			var el = "bar";

			var expectedOutcome = [
				["coffee"], "cup", "bar", [
					["tea"], "cup", "bar"],
				["and", ["hick"]], "cup", "bar"];

			expect(insertRStar(el, target, list)).toEqual(expectedOutcome);
		});
	});

	describe("occurStar", function() {
		it("can find the number of occurances of an atom in a list", function() {
			var list = [
				["coffee"], "cup", [
					["tea"], "cup"],
				["and", ["hick"]], "cup"];

			var target = 'cup';

			expect(occurStar(target, list)).toEqual(3);

		});
	});

	describe("substStar", function() {
		it("replaces all occurences of an atom in a list of lists", function() {
			var list = [
				["coffee"], "cup", [
					["tea"], "cup"],
				["and", ["hick"]], "cup"];

			var target = 'cup';
			var el = 'can';

			var expectedOutcome = [
				["coffee"], "can", [
					["tea"], "can"],
				["and", ["hick"]], "can"];

			expect(substStar(el, target, list)).toEqual(expectedOutcome);

		});
	});

	describe("insertLStar", function() {
		it("inserts a new atom to the left of every occurance of a target atom in a list of lists", function() {
			var list = [
				["coffee"], "cup", [
					["tea"], "cup"],
				["and", ["hick"]], "cup"];

			var target = 'cup';
			var el = 'tin';

			var expectedOutcome = [
				["coffee"], "tin", "cup", [
					["tea"], "tin", "cup"],
				["and", ["hick"]], "tin", "cup"];

			expect(insertLStar(el, target, list)).toEqual(expectedOutcome);
		});
	});

	describe("memberStar", function() {
		it("can tell whether an atom exists in a list of lists", function() {
			var list = [
				["coffee"], "cup", [
					["tea"], "cup"],
				["and", ["hick"]], "cup"];
			var target = 'tea';

			expect(memberStar(target, list)).toBe(true);
		});

		it("can tell that 'bar' does not exist in a list of lists", function() {
			var list = [
				["coffee"], "cup", [
					["tea"], "cup"],
				["and", ["hick"]], "cup"];
			var target = 'bar';

			expect(memberStar(target, list)).toBe(false);
		});
	});

	describe("leftmost", function() {
		it("can find the leftmost atom of a non-empty list", function() {
			var list = [
				[
					['hot'],
					['tuna', ['and']], 'cheese']
			];

			expect(leftmost(list)).toEqual('hot');
		});
	});

	describe("eqlist", function() {
		it("two non-identical lists are not equal using eqlists", function() {
			var list1 = [
				["coffee"], "cup", [
					["tea"], "cup"],
				["and", ["hick"]], "cup"];
			var list2 = [
				["coffee"], "cup", [
					["tea"], "cup"],
				[
					["and"],
					["hick"]
				], "cup"];
			expect(eqlist(list1, list2)).toBe(false);
		});

		it("two identical lists are equal using eqlists", function() {
			var list = [
				["coffee"], "cup", [
					["tea"], "cup"],
				["and", ["hick"]], "cup"];
			expect(eqlist(list, list)).toBe(true);
		});

		it("two empty lists will return true", function() {
			expect(eqlist([], [])).toBe(true);
		});
	});

	describe("equal", function() {
	  it("can verify if stuff is equal", function() {
	    var l1 = [["a"]];
	    var l2 = [["b"]];

	    expect(equal(l1, l2)).toBe(false);
	  });
	});
});