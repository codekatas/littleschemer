function keep_looking (target, pos, list) {
	if(isNumber(pos)) return keep_looking(target, pick(pos, list), list);
	return equan(pos, target);
}

function looking (target, list) {
	return keep_looking(target, 1, list);
}


//[['a','b'], 'c'];
//['a',['b', 'c']];
function shift (list) {
	return build(
			  frst(frst(list))
			, build ( 
						  second(frst(list)) 
						, second(list)
					)
				);
}