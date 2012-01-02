describe("rember", function() {
  it("rember finds a word in a list and returns the list without that word", function() {

    var target = 'milk';
    var list = '(cookies milk sugar)';
    expect(isMember(target, list.array())).toBe(true);

    var result = rember(target, list.array());
    expect(isMember(target, result)).toBe(false);
  });
});

describe("firsts", function() {
  it("takes the first element of a list of lists", function() {
    var t = '((a b) (c d))';
    var list = t.array();
   
    expect(firsts(list)).toEqual(['a', 'c']);
  });
});

describe("insertR", function() {
  it("inserts an element to the right of the found target in a list", function() {
    var t = '(a b c d)';
    var target = 'b';
    var el = 'e';
    var list = t.array();

    var expected = ['a', 'b', 'e', 'c', 'd'];
    expect(insertR(el, target, list)).toEqual(expected);
  });
});

describe("insertL", function() {
  it("inserts an element to the left of the found target in a list", function() {
    var t = '(a b c d)';
    var target = 'b';
    var el = 'e';
    var list = t.array();

    var expected = ['a', 'e', 'b', 'c', 'd'];
    expect(insertL(el, target, list)).toEqual(expected);
  });

  it("inserts an element to the left of the found target in a list", function() {
    var t = '(a b)';
    var target = 'a';
    var el = 'e';
    var list = t.array();

    var expected = ['e', 'a', 'b'];
    expect(insertL(el, target, list)).toEqual(expected);
  });
});

describe("subst", function() {
  it("replaces elements in a list", function() {
    var t = '(a b)';
    var target = 'a';
    var el = 'e';
    var list = t.array();

    var expected = ['e', 'b'];
    test = subst(el, target, list);
    
    expect(test).toEqual(expected);
  });
});

describe("subst2", function() {
  it("replaces the first occurence of o1 or the first occurence of o2 in a list", function() {
    var t = '(a b c)';
    var target1 = 'd';
    var target2 = 'c';
    var el = 'e';
    var list = t.array();

    var expected = ['a', 'b', 'e'];
    test = subst2(el, target1, target2, list);
    
    expect(test).toEqual(expected);
  });
});

describe("multirember", function() {
  it("removes all occurences of t in a list", function() {
    var t = '(a b c a)';
    var target = 'a';
    var list = t.array();

    var expected = ['b', 'c'];
    test = multirember(target, list);
    
    expect(test).toEqual(expected);
  });
});

describe("multiinsertR", function() {
  it("inserts a value right of the target value (when found) for all occurences of the target value", function() {
    var t = '(a b c a)';
    var target = 'a';
    var el = 'y';
    var list = t.array();

    var expected = ['a','y','b', 'c', 'a', 'y'];
    test = multiinsertR(el, target, list);
    
    expect(test).toEqual(expected); 
  });
});

describe("multiinsertL", function() {
  it("inserts a value to the left side of each occurence of the target value in the list", function() {
    var t = '(a b c a)';
    var target = 'a';
    var el = 'y';
    var list = t.array();

    var expected = ['y','a','b', 'c', 'y', 'a'];
    test = multiinsertL(el, target, list);
    
    expect(test).toEqual(expected); 
  });
});

describe("multisubst", function() {
  it("replaces any occurance of an item in a list", function() {
    var t = '(a b c a)';
    var target = 'a';
    var el = 'y';
    var list = t.array();

    var expected = ['y','b', 'c', 'y'];
    test = multisubst(el, target, list);
    
    expect(test).toEqual(expected); 
  });
});



