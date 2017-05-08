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
			oSs4 = $('.ss4'),
			oLan = $('#lanxia'),
			oApp = $('#apple'),
			oShu = $('#shu'),
			oJiu = $('#jiu'),
			oXin = $('#xin'),
			oLiang = $('#liang'),
			oCha = $('#cha'),
			oGuo = $('#guoji'),
			oJj = $('.jj'),
			oMenu = $('#menu'),
			oHhh1 = $('.hhh1'),
			oHhh2 = $('.hhh2'),
			oHhh3 = $('.hhh3'),
			oUl2 = $('.ul2'),
			oUl3 = $('.ul3'),
			oUl4 = $('.ul4'),
			oBbb1 = $('.bbb1'),
			oBbb2 = $('.bbb2'),
			oBbb3 = $('.bbb3'),
			oPan1 = $('.pan'),
			oAdrs1 = $('#adrs'),
			oUk = $('#uk'),
			oLee = $('.lee'),
			oRii = $('.rii');

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
		hover(oJj, oMenu);
		hover(oMenu, oMenu);

		hover(oSpn1, oLan);
		hover(oLan, oMenu);
		hover(oShu, oMenu);
		hover(oJiu, oMenu);
		hover(oXin, oMenu);
		hover(oLiang, oMenu);
		hover(oCha, oMenu);
		hover(oGuo, oMenu);
		hover(oLan, oLan);
		hover(oSpn2, oApp);
		hover(oApp, oApp);
		hover(oApp, oMenu);
		hover(oSpn3, oShu);
		hover(oShu, oShu);
		hover(oSpn4, oJiu);
		hover(oJiu, oJiu);
		hover(oSpn5, oXin);
		hover(oXin, oXin);
		hover(oSpn6, oLiang);
		hover(oLiang, oLiang);
		hover(oSpn7, oCha);
		hover(oCha, oCha);
		hover(oSpn8, oGuo);
		hover(oGuo, oGuo);

		oHhh1.bind('click', function() {
			oUl2.toggle(),
				oBbb1.toggle(),
				oUl3.css('display', 'none'),
				oUl4.css('display', 'none')
		})

		oHhh2.bind('click', function() {
			oUl3.toggle(),
				oBbb2.toggle(),
				oUl2.css('display', 'none'),
				oUl4.css('display', 'none')
		})

		oHhh3.bind('click', function() {
			oUl4.toggle(),
				oBbb3.toggle(),
				oUl2.css('display', 'none'),
				oUl3.css('display', 'none')
		})

		$("#do5").click(function() {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
		})

		$('#liss li').bind('mouseenter', function() {
			let Index = $(this).index();
			$('#liss li').eq(Index).addClass('lli');
		})

		$('#liss li').bind('mouseleave', function() {
			let Index = $(this).index();
			$('#liss li').eq(Index).removeClass('lli');
		})

		let i = 1;
		oRii.bind('click', function() {
			i++;
			move();
		})

		oLee.bind('click', function() {
			i++;
			console.log(i);
			move2();
		})

		function move() {
			if(i === 2) {
				i = 0
			}
			if(i === 1) {
				oUk.css('left', -1920)
			}
			oUk.stop(true).animate({
				left: -i * 960
			}, 1000)
		}
		

		function move2() {
			if(i === 4) {
				i = 0
			}
			oUk.stop(true).animate({
				left: -i * 960
			}, 1000)
			if(i === 3) {
				oUk.css('left', 0)
			}
		}

//		function move2() {
//			if(i === 4) {
//				i = 0
//			}
//			oUk.stop(true).animate({
//				left: -i * 960
//			}, 1000)
//			if(i === 3) {
//				oUk.css('left', 0)
//			}
//		}

		//	oLee.bind('click',function(){
		//		oUk.animate({
		//			left:-1920
		//		})
		//	},2000)

		//	function move(){
		//		left:
		//	}


		let oTop = $("#qq").offset().top,
		    sTop;
		$(window).scroll(function() {
			sTop = $(this).scrollTop();		
			if(sTop >= oTop) {
				$("#qq").css({
					"position": "fixed",
					"top": "0"
				});
			} else {
				$("#qq").css({
					"position": "absolute",
					"top": "364px"
				});
			}
		});
		
		
			$("#do5").click(function(){
       $('body,html').animate({scrollTop:0},500);
 })
		
		

	});
})(jQuery)