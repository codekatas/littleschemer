function remberStar (target, list) {
	if(isNull(list)) return [];

	if(isAtom(car(list))){
		if(equan(car(list), target)) return remberStar(target, cdr(list));
		return cons (car(list), remberStar(target, cdr(list)));
	}
		 
	return cons(remberStar(target, car(list)), remberStar(target, cdr(list)));
}

function insertRStar (el, target, list) {
	if(isNull(list)) return [];

	if(isAtom(car(list))){
		if(equan(car(list), target)) return cons(car(list), cons(el, insertRStar(el, target, cdr(list))));
		return cons(car(list), insertRStar(el, target, cdr(list)));		
	}
	return cons(insertRStar(el, target, car(list)), insertRStar(el, target, cdr(list)));
}

function occurStar (target, list) {
	if(isNull(list)) return 0;

	if(isAtom(car(list))){
		if(equan(target, car(list))) return add1(occurStar(target, cdr(list)));
		return occurStar(target, cdr(list));
	}
	return add(occurStar(target, car(list)), occurStar(target, cdr(list)));
}

function substStar (el, target, list) {
	if(isNull(list)) return [];

	if(isAtom(car(list))) {
		if(equan(target, car(list))) return cons(el, substStar(el, target, cdr(list)));
		return cons(car(list), substStar(el, target, cdr(list)));
	}
	return cons(substStar(el, target, car(list)), substStar(el, target, cdr(list)));
}

function insertLStar (el, target, list) {
	if(isNull(list)) return [];

	if(isAtom(car(list))){
		if(equan(target, car(list))) return cons(el, cons(car(list), insertLStar(el, target, cdr(list))));
		return cons(car(list), insertLStar(el, target, cdr(list)));
	}
	return cons(insertLStar(el, target, car(list)), insertLStar(el, target, cdr(list)));
}

function memberStar (target, list) {
	if(isNull(list)) return false;
	if(isAtom(car(list))){
		if(equan(target, car(list))) return true;
		return memberStar(target, cdr(list));		
	}
	return (memberStar(target, car(list)) || memberStar(target, cdr(list)));
}

function leftmost (list) {
	if(isNull(list)) return undefined;
	if(isAtom(car(list))) return car(list);
	return leftmost(car(list));
}

function eqlist (list1, list2) {
	if(isNull(list1) && isNull(list2)) return true;
	if(isNull(list1) || isNull(list2)) return false;

	return equal(car(list1), car(list2)) && eqlist(cdr(list1), cdr(list2));

	// if(isAtom(car(list1)) && isAtom(car(list2))){
	// 	return equan(car(list1), car(list2)) && eqlist(cdr(list1), cdr(list2));
	// }
	// return eqlist(car(list1), car(list2)) && eqlist(cdr(list1), cdr(list2));
}

function equal (l1, l2) {
	if(isAtom(l1) && isAtom(l2)) return equan(l1, l2);
	if(isAtom(l1) || isAtom(l2)) return false;
	return eqlist(l1, l2);
}










