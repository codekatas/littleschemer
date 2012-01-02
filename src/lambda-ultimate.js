function rember_f(constraint, list) {
	if (isNull(list)) return [];

	if (constraint(car(list))) return rember_f(constraint, cdr(list));
	return cons(car(list), rember_f(constraint, cdr(list)));
}

/* incorrect version of rember_f => this one is straight from the book, but does not remove all occurences of target in list */
// function rember_fi (func, target, list) {
// 	if(isNull(list)) return [];
// 	if(func(target, car(list))) return cdr(list);
// 	return cons(car(list, rember_fi(func, target, cdr(list))));
// }

function eq_c(target) {
	return function(x) {
		return equan(x, target);
	}
}


function insertL_f(el, target, list) {
	return insert_g(seqL)(el, target, list);
}


function insertR_f(el, target, list) {
	// return insert_g(seqR)(el, target, list); // the book prefers the inline function usage; I don't ;-)
	return insert_g(function(el, target, list) {
		return cons(target, cons(el, list));
	})(el, target, list);
}

function insert_g(seqTypeFunc) {
	return function(el, target, list) {
		if (isNull(list)) return [];
		setVars.call(this, list);

		if (equan(first, target)) return seqTypeFunc(el, target, rem);
		return cons(first, insert_g(seqTypeFunc)(el, target, rem));
	};
}

function seqR(el, target, list) {
	return cons(target, cons(el, list));
}

function seqL(el, target, list) {
	return cons(el, cons(target, list));
}

function subst_f(el, target, list) {
	var t = insert_g(seqS)(el, target, list);
	return t;
}

function subst(el, target, list) {
	if (isNull(list)) return [];
	setVars.call(this, list);

	if (isEqual(first, target)) return cons(el, rem);
	return cons(first, subst(el, target, rem));
}

function seqS(el, target, list) {
	return cons(el, list);
}

function rember_f(el, list) {
	return insert_g(segrem)(el, el, list);
}

function segrem(el, target, list) {
	return list;
}


function value(nexp) {
	if (isNumber(nexp)) return nexp;
	return atom_to_func(car(cdr(nexp)))(value(car(nexp)), value(car(cdr(cdr(nexp)))));
}

function atom_to_func(atom) {
	if (equan(atom, '+')) return add;
	if (equan(atom, 'x')) return multiply;
	return power;
}

function multirember_col(target, list, col) {
	if (isNull(list)) {
		return col([], []);
	}
	if (equan(car(list), target)) {
		return multirember_col(target, cdr(list), matched_friend(col, car(list)));
	}
	return multirember_col(target, cdr(list), non_matched_friend(col, car(list)));
}

function non_matched_friend(col, atom) {
	return function(newLat, seen) {
		return col(cons(atom, newLat), seen);
	}
}

function matched_friend(col, atom) {
	return function(newLat, seen) {
		return col(newLat, cons(atom, seen));
	}
}

function non_matched_friend_count(x, y) {
	return length(x);
};


function multiremberLR(atom, oldL, oldR, list) {
	if (isNull(list)) return [];
	if (equan(car(list), oldL)) return cons(atom, cons(oldL, multiremberLR(atom, oldL, oldR, cdr(list))));
	if (equan(car(list), oldR)) return cons(oldR, cons(atom, multiremberLR(atom, oldL, oldR, cdr(list))));
	return cons(car(list), multiremberLR(atom, oldL, oldR, cdr(list)));
}

function multiremberLR_col(atom, oldL, oldR, list, col) {
	if (isNull(list)) return col([], 0, 0);

	// note the order of cons-ing: it is always cons(newstuff, collected), have a look also at multirember_col
	// we are using functions to store data; very cool
	if (equan(car(list), oldL)) {
		return multiremberLR_col(atom, oldL, oldR, cdr(list), function(collected, countL, countR) {
			return col(
			cons(atom, cons(oldL, collected)) //always cons new stuff to whatever you want to collect cons(newstuff, collected)
			, add1(countL), countR);
		});
	};

	if (equan(car(list), oldR)) {
		return multiremberLR_col(atom, oldL, oldR, cdr(list), function(collected, countL, countR) {
			return col(
			cons(oldR, cons(atom, collected)) //same as with L, cons new stuff with previously collected items
			, countL, add1(countR));
		});
	}

	return multiremberLR_col(atom, oldL, oldR, cdr(list), function(collected, countL, countR) {
		return col(
		cons(car(list), collected) //no match, therefore grab first item using car and move on
		, countL, countR);
	});
}

/*
function xxx(list, func){
	if(isNull(list)) return func([], params x); // params x is the empty value for each second and next parameter type in func
	if(someCondition){
		return xxx(cdr(list), function(collected, params x){
			return func(cons(newStuff, collected), params x); // newStuff can be anything, as long as it can be consed with 'collected' stuff
		})
	}
	if(someOtherCondition){
		return xxx(cdr(list), function(collected, params x){
			return func(cons(newStuff, collected), params x); // params can be anything, similar to params, but not connected to any input
		})
	}
	return xxx(cdr(list), function(collected, params x){
		return func(cons(car(list), collected), params x ); // using the first item in the list with car basically skips this item and moves on
	})
}
*/

function evensonly(list) {
	if (isNull(list)) return [];

	if (isAtom(car(list))) {
		if (isEven(car(list))) return cons(car(list), evensonly(cdr(list)));
		return evensonly(cdr(list));
	}
	return cons(evensonly(car(list)), evensonly(cdr(list)));
}

// var list = [
// 	[1, 2, 3], 		//2
// 	 1, 2, 4, 		//6
// 	 [10, 12] 		//22 total: 30
// 	 ];

function evensonly_col(list, func) {
	if (isNull(list)) return func([]);
	if (isAtom(car(list))) {
		if (isEven(car(list))) {
			return evensonly_col(cdr(list), function(newLat) {
				return func(cons(car(list), newLat));
			});
		}
		return evensonly_col(cdr(list), function(newLat) {
			return func(newLat);
		});
	}
	return evensonly_col(car(list), function(al) {
		return evensonly_col(cdr(list), function(dl) {
			return func(cons(al, dl));
		})
	})
}

function evensonly_col(list, func) {
	if (isNull(list)) return func([], 1, 0);
	if (isAtom(car(list))) {
		if (isEven(car(list))) {
			return evensonly_col(cdr(list), function(newLat, p, s) {
				return func(cons(car(list), newLat), p * car(list), s); //I'm using * instead of multiply because of recursion errors in Firefox; apparantly it does not support this much nesting ;)
			});
		}
		return evensonly_col(cdr(list), function(newLat, p, s) {
			return func(newLat, p, add(s, car(list)));
		});
	}

	//this is one of the most tricky parts; double recursion for car(list) & cdr(list) where the results are combined using the func
	return evensonly_col(car(list), function(al, ap, as) {
		return evensonly_col(cdr(list), function(cl, cp, cs) {
			return func(cons(al, cl), ap * cp, add(cs, as));
		});
	});
}


function sum_match(newLat, p, s) {
	return {
		newLat: newLat,
		productEvenNumbers: p,
		sumOddNumbers: s,
		the_last_friend: cons(s, cons(p, newLat))
	};
}