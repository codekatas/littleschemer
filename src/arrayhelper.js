var AH = (function() {


	return {
		parse: function(s) {

			var result = [];
			for (var i = 1; i < s.length - 1; i++) {
				switch (s[i]) {
				case /\w / .test(s[i]):
					result.push(s[i]);
					break;
				}
			};
			return result;
		}
	}
}());