(function() {
	$(function() {
		let
			Span = $('#span'),
			address = $('#address'),
			li3 = $('#li3'),
			li5 = $('#li5'),
			li6 = $('#li6'),
			oYou = $('.you'),
			oHelp = $('.help'),
			oNav = $('.nav'),
			oCar = $('#car'),
			oCars = $('#cars'),
			oGoos = $('#goods'),
			oSpn1 = $('.spn1'),
			oSpn2 = $('.spn2'),
			oSpn3 = $('.spn3'),
			oSpn4 = $('.spn4'),
			oSpn5 = $('.spn5'),
			oSpn6 = $('.spn6'),
			oSpn7 = $('.spn7'),
			oSpn8 = $('.spn8'),
			oCcc = $('.ccc'),
			oCcd = $('.ccd'),
			oPan = $('.pan'),
			oAdrs = $('#adrs'),
			oCce = $('.cce'),
			oCcf = $('.ccf'),
			oSs1 = $('.ss1'),
			oSs2 = $('.ss2'),
			oSs3 = $('.ss3'),
			oSs4 = $('.ss4');

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

	});
})(jQuery)