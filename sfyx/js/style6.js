(function() {
	$(function() {
		let
			Span = $('#span'),
			address = $('#address'),
			li3 = $('#li3'),
			li5 = $('#li5'),
			li6 = $('#li6'),
			oPan1 = $('.pan'),
			oAdrs1 = $('#adrs'),
			oYou = $('.you'),
			oHelp = $('.help'),
			oNav = $('.nav');

		function hover(j, k) {
			j.hover(function() {
				k.css('display', 'block')
			}, function() {
				k.css('display', 'none')
			});
		}

		hover(Span, address);
		hover(address, address);
		hover(li3, oYou);
		hover(oYou, oYou);
		hover(li5, oHelp);
		hover(oHelp, oHelp);
		hover(li6, oNav);
		hover(oNav, oNav);
		hover(oPan1, oAdrs1);
		hover(oAdrs1, oAdrs1);

	});
})(jQuery)