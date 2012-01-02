function add1(n) {
	return ++n;
}

function sub1(n) {
	return --n;
}

function isZero(n) {
	return n === 0;
}

function add(first, second) {
	if (isZero(second)) return first;
	return add1(add(first, sub1(second)));
}

function subtr(first, second) {
	if (second > first) return undefined;
	if (isZero(second)) return first;
	return sub1(subtr(first, sub1(second)));
}

function sum(list) {
	if (isNull(list)) return 0;
	return add(car(list), sum(cdr(list)));
}

function multiply(n, m) {
	if (isZero(m)) return 0;
	return add(n, multiply(n, sub1(m)));
}

function tupplus(list1, list2) {
	if (isNull(list1)) return list2;
	if (isNull(list2)) return list1;
	return cons(add(car(list1), car(list2)), tupplus(cdr(list1), cdr(list2)));
}


function isGreater(n, m) { // n is tested if it's greater than m
	if (isZero(n)) return false;
	if (isZero(m)) return true;
	return isGreater(sub1(n), sub1(m));
}

function isLess(n, m) { //n is tested if it's less than m
	if (isZero(m)) return false;
	if (isZero(n)) return true;
	return isLess(sub1(n), sub1(m));
}

function power(n, m) { // n to the power of m 
	if (isZero(m)) return 1;
	return multiply(n, power(n, sub1(m)));
}

function divide(n, m) { // divide n by m => 4,2 <-> 4:2
	if (isLess(n, m)) return 0;
	return add1(divide(subtr(n, m), m));
}

function length(obj) {
	if (isNull(obj)) return 0;
	return add1(length(cdr(obj)));
}

function pick(pos, list) { // [1,2,3,4] & 3 => l4 p3 / l3 p2 / l2 p1
	if (isNull(list)) return undefined;
	if (isZero(sub1(pos))) return car(list);
	return pick(sub1(pos), cdr(list));
}

function isNumber (obj) {
	if (isType(obj, "Number")) return true;
	return false;
}


function areEqualNumbers (n, m) {
	if(isLess(n, m)) return false;
	if(isGreater(n,m)) return false;
	return true;
}

function isOne (n) {
	return equan(n, 1);
}