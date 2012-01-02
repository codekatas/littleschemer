describe("car", function() {
  //keep these literal.  otherwise the test loses value as a test.
  it("takes the first item from an array", function() {
    expect(car(['a'])).toEqual('a');
  });

  it("returns undefined when given empty array", function() {
    expect(car([])).toBeUndefined();
  });

  it("returns undefined when given notthing", function() {
    expect(car()).toBeUndefined();
  });

});

describe("cdr", function() {
  it("skips fhe first item and returns the rest of the array", function() {
    expect(cdr(['a', 'b'])).toEqual(['b']);
  });
  it("returns the last part, even when it's a nested array", function() {
    expect(cdr(['a', ['a', 'b']])).toEqual([
      ['a', 'b']
    ]);
  });

  it("returns (b c) for (a b c)", function() {
    expect(cdr(['a', 'b', 'c'])).toEqual(['b', 'c']);
  });

  it("returns (x y z) for (( a b c) x y z)", function() {
    expect(cdr([
      ['a', 'b', 'c'], 'x', 'y', 'z'])).toEqual(['x', 'y', 'z']);
  });

  it("returns empty array for (h)", function() {
    expect(cdr(['h'])).toEqual([]);
  });
});


describe("car & cdr combined", function() {
  it("returns (x y) for ((b)(x y)(c))", function() {
    expect(car(cdr([
      ['b'],
      ['x', 'y'],
      ['c']
    ]))).toEqual(['x', 'y']);
  });

  it("can manage a double cdr", function() {
    expect(cdr(cdr([
      ['b'],
      ['x', 'y'],
      [
        ['c']
      ]
    ]))).toEqual([
      [
        ['c']
      ]
    ]);
  });
});

describe("cons", function() {
  it("will append to the first position", function() {
    expect(cons('a', ['b', 'c'])).toEqual(['a', 'b', 'c']);
  });
});

describe("isnull", function() {
  it("() is a null list) ", function() {
    var emptyArray = [];
    expect(emptyArray.isNull()).toBe(true);
  });

  it("(a b c) is not null", function() {
    expect(['a', 'b', 'c'].isNull()).toBe(false);
  });


});

describe("scheme parsing", function() {
  it("can parse scheme structure into array", function() {
    var t = '(a b c)';
    var u = t.array();
    expect(isArray(u)).toBe(true);

    expect(car(u)).toEqual('a');
    expect(cdr(u)).toEqual(['b', 'c']);
  });
  it("can parse complex structure", function() {
    var t = '((x y) a b)';
    var u = t.array();
    expect(u).toEqual([
      ['x', 'y'], 'a', 'b']);
  });
});

describe("is atom", function() {
  it("a string is an atom", function() {
    expect(isAtom('a')).toBe(true);
  });
  it("an array is not an atom", function() {
    var obj = [];
    expect(isAtom(obj)).toBe(false);
  });

  it("a nubmer is also an atom", function() {
    expect(isAtom(5)).toBe(true);
  });
});


describe("eq", function() {
  it("is true for two equal atoms", function() {
    var t1 = t2 = 'harrie';
    expect(t1).toEqual(t2);

    expect(isEqual(t1, t2)).toBe(true);

  });

  it("can not work on an array and an atom", function() {
    var t1 = [];
    var t2 = 'harrie';

    expect(isEqual(t1, t2)).toBeUndefined;
  });

  it("two different atoms are not equal", function() {
    expect(isEqual('a', 'b')).toBe(false);
  });

  it("two numbers can not be checked for equality", function() {
    expect(isEqual(5,6)).toBeUndefined();
  });

  it("should return undefined for two numbers", function() {
    expect(isEqual(5,5)).toBeUndefined();
  });

});

describe("can verify undefined", function() {
  it("can find undefined", function() {
    expect(undefined).toBeUndefined();
  });


});

describe("lat", function() {
  it("a list of strings is a lat", function() {
    var t = '(a b c)';
    expect(isLat(t.array())).toBe(true);
  });

  it("a list containing a list is not a lat", function() {
    var t = '((a) b c)';
    expect(isLat(t.array())).toBe(false);
  });

  it("an empty list is a lat", function() {
    expect(isLat([])).toBe(true);
  });
});



describe("member", function() {
  it("should be true if a string is in a list", function() {
    var target = 'milk';

    var list = '(cookie milk sugar)';
    expect(isMember(target, list.array())).toBe(true);
  });

  it("should be false when a string is not in the list", function() {
    var target = 'milk';
    var list = '(cookie sugar)';
    expect(isMember(target, list.array())).toBe(false);
  });
});


describe("arrayhelper", function() {
  it("can convert a list of strings to an array", function() {
    var list= '(milk sugar)';

    expect(list.array()).toEqual(['milk', 'sugar'])
  });

  it("can convert list of lists to an array ", function() {
    var t = '((a b) (c d))';
    var list = t.array();
    expect(list).toEqual([['a','b'],['c','d']]);
  });
});



