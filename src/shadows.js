function isNumbered (aexp) {
	if(isAtom(aexp)) return isNumber(aexp) ;
	return isNumbered(car(aexp)) && isNumbered(car(cdr(cdr(aexp))));
}

