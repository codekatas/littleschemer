function car(s) {
	if (s === undefined) return undefined;
	return s[0];
}

function cdr(s) {
	var t = s.clone();
	return t.splice(1);
}

function cons(item, s) {

	// console.log('item: ' + item);
	// console.log('s: '+ s);
	// console.log('s.len: '+ s.length);

	var t = s.clone();
	t.splice(0, 0, item);

	// console.log('t: '+ t )
	return t;

}

Array.prototype.isNull = function() {
	return this.length == 0;
}

function isArray(obj) {
	if (obj.constructor.toString().indexOf("Array") == -1) return false;
	else return true;
}

Array.prototype.clone = function() {
	return this.slice(0);
}

String.prototype.array = function() {
	var t = this;
	t = t.replace(/\(/g, '[');
	t = t.replace(/\)/g, ']');
	t = t.replace(/[\w]+/g, function(m) {
		return '"' + m + '"';
	});
	t = t.replace(/ "/g, function(m) {
		return ',' + m;
	});
	t = t.replace(/\] /, '],');


	t = 'var u = ' + t + ';';
	t = t.replace(',;', ';');
	//console.log(t);
	eval(t);
	//console.log(u);
	return u;
}

function isAtom(obj) {
	if (isType(obj, "String")) return true;
	if (isType(obj, "Number")) return true;
	return false;
}

function isType(obj, type) {
	if (obj.constructor.toString().indexOf(type) == 9) return true;
	return false;
}

function isNonNumericAtom(obj) {
	return isType(obj, "String");
}

function isEqual(t1, t2) {
	if (!isNonNumericAtom(t1) || !isNonNumericAtom(t2)) return undefined;
	return t1 === t2;
}

function isNull(obj) {
	return obj.length === 0;
}

function isLat(s) { //dit werkt met recursie
	if (isNull(s)) return true; //stop clause voor het geval alle items zijn langgeweest
	if (isAtom(car(s))) return isLat(cdr(s)); //als de eerste een atom is, ga dan verder met de rest; anders return false
	return false;

	//normale alternatief
	// for (var i = 0; i < s.length; i++) {
	// 	if (!isAtom(s[i]) return false;
	// 	}
}

function isMember(target, list) {
	if (isNull(list)) return false; //guard
	if (isEqual(target, car(list))) return true; //item check
	return isMember(target, cdr(list)); //continue with rest
}

function rember(target, list) {
	if (isNull(list)) return [];
	if (isEqual(target, car(list))) return cdr(list);
	return cons(car(list), rember(target, cdr(list)));
}

function firsts(list) {
	if (isNull(list)) return [];
	return cons(car(car(list)), firsts(cdr(list)));
}

function insertR(el, target, list) {
	if (isNull(list)) return [];
	setVars.call(this, list);

	if (isEqual(target, first)) return cons(first, cons(el, rem));
	return cons(first, insertR(el, target, rem));
}

function insertL(el, target, list) {
	if (isNull(list)) return [];
	setVars.call(this, list);

	if (isEqual(first, target)) return cons(el, list);
	return cons(first, insertL(el, target, rem));
}


function subst2(el, t1, t2, list) {
	if (isNull(list)) return [];
	setVars.call(this, list);

	if (isEqual(first, t1) || isEqual(first, t2)) return cons(el, rem);
	return cons(first, subst2(el, t1, t2, rem));
}

function multirember(target, list) {
	if (isNull(list)) return [];
	setVars.call(this, list);

	if (isEqual(first, target)) return multirember(target, rem);
	return cons(first, multirember(target, rem));
}

function multiinsertR(el, target, list) {
	if (isNull(list)) return [];
	setVars.call(this, list);

	if (isEqual(first, target)) return cons(first, cons(el, multiinsertR(el, target, rem)));
	return cons(first, multiinsertR(el, target, rem));
}

function multiinsertL(el, target, list) {
	if (isNull(list)) return [];
	setVars.call(this, list);

	if (isEqual(first, target)) return cons(el, cons(first, multiinsertL(el, target, rem)));
	return cons(first, multiinsertL(el, target, rem));
}

function multisubst(el, target, list) {
	if (isNull(list)) return [];
	setVars.call(this, list);

	if (isEqual(first, target)) return cons(el, multisubst(el, target, rem));
	return cons(first, multisubst(el, target, rem));
}

function setVars(list) {
	this.first = car(list);
	this.rem = cdr(list);
}

function rempick(pos, list) {
	if (isNull(list)) return [];
	if (isOne(pos)) return cdr(list);
	return cons(car(list), rempick(sub1(pos), cdr(list)));
}

function noNums(list) {
	if (isNull(list)) return [];
	if (isNumber(car(list))) return noNums(cdr(list));
	return cons(car(list), noNums(cdr(list)));
}

function allNums(list) {
	if (isNull(list)) return [];
	if (isNumber(car(list))) return cons(car(list), allNums(cdr(list)));
	return allNums(cdr(list));
}

function equan(n, m) {
	if (isNumber(n) && isNumber(m)) return areEqualNumbers(n, m);
	if (isNumber(n) || isNumber(m)) return false;
	return isEqual(n, m);
}

function occur(target, list) {
	if (isNull(list)) return 0;
	if (equan(target, car(list))) return add1(occur(target, cdr(list)));
	return occur(target, cdr(list));
}

function isEven(number) {
	return number % 2 == 0;
}