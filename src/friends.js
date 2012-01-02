function isSet(list) {
	if (isNull(list)) return true;

	if (isMember(car(list), cdr(list))) return false;
	return isSet(cdr(list));
}

function makeset(list) {
	if (isNull(list)) return [];
	return cons(car(list), makeset(multirember(car(list), cdr(list))));
}

function isSubset(set1, set2) {
	if (isNull(set1)) return true;
	return isMember(car(set1), set2) && isSubset(cdr(set1), set2);
}

function eqset(set1, set2) {
	return isSubset(set1, set2) && isSubset(set2, set1);
}

function doesIntersect(set1, set2) {
	if (isNull(set1)) return false;
	return isMember(car(set1), set2) || doesIntersect(cdr(set1), set2);
}

function union(set1, set2) {
	if (isNull(set1)) return set2;

	if (isMember(car(set1), set2)) return union(cdr(set1), set2);
	return cons(car(set1), union(cdr(set1), set2));
}

function intersect(set1, set2) {
	if (isNull(set1)) return [];
	if (isMember(car(set1), set2)) return cons(car(set1), intersect(cdr(set1), set2));
	return intersect(cdr(set1), set2);
}

function intersectall(list) {
	if (isNull(cdr(list))) return car(list);  //has arrived at last set in the list; return this (last) set
	return intersect(car(list), intersectall(cdr(list))); //compare previous set against last set
}

function isPair (list) {
	if(isAtom(list)) return false;
	if(isNull(list)) return false;
	if(isNull(cdr(list))) return false;
	if(isNull(cdr(cdr(list)))) return true;
	return false;
}

function frst (list) {
	return car(list);
}

function second (list) {
	return car(cdr(list));
}

function build (s1, s2) {
	return cons(s1, cons(s2, []));
}

function third (list) {
	return car(cdr(cdr(list)));
}