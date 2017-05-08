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
			oB1 = $('#b1'),
			oB2 = $('#b2'),
			oIst = $('#ist'),
			oPanp = $('.pan'),
			oAdrss = $('#adrs'),
			oAj = $('.aj'),
			oAji = $('.aji'),
			oBian = $('#bian'),
			oDian = $('.dian'),
			oUul = $('.uul'),
			oQqa1 = $('.qqa1'),
            oQqa2 = $('.qqa2'),
            oVal = $('.val'),
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

		hover(oPanp, oAdrss);
		hover(oAdrss, oAdrss);
		hover(Span, address);
		hover(address, address);
		hover(li3, oYou);
		hover(oYou, oYou);
		hover(li5, oHelp);
		hover(oHelp, oHelp);
		hover(li6, oNav);
		hover(oNav, oNav);

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

		oDian.click(function() {
			oUul.toggle()
		})

		oB1.bind('click', function() {
			if(oIst.css('top') == '0px') {
				oIst.stop(true).animate({
					top: -60
				})
			}
		})

		oB2.bind('click', function() {
			if(oIst.css('top') == '-60px') {
				oIst.stop(true).animate({
					top: 0
				})
			}
		})

		$('#ist li').bind('mouseenter', function() {
			let index = $(this).index(),
				src = $('#ist img').eq(index).attr('src');
			$('#ist li').removeClass('act').eq(index).addClass('act');
			$('#mmg').attr('src', src);
			$('#bmg').attr('src', src);
		})

		$('#to').hover(function() {
			$('.ddb').css('display', 'block'),
				$('#ddt').css('display', 'block')
		}, function() {
			$('.ddb').css('display', 'none'),
				$('#ddt').css('display', 'none')
		})

		$('#to').bind('mousemove', function(e) {
			let
				iX = e.pageX,
				iY = e.pageY,
				iL = $('#to').offset().left,
				iT = $('#to').offset().top,

				zhong1 = iX - iL - $('.ddb').width() / 2,
				zhong2 = iY - iT - $('.ddb').height() / 2;

			if(zhong1 < 0) {
				zhong1 = 0
			}
			if(zhong2 < 0) {
				zhong2 = 0
			}

			if(zhong1 > $('#to').width() - $('.ddb').width()) {
				zhong1 = $('#to').width() - $('.ddb').width();
			}

			if(zhong2 > $('#to').height() - $('.ddb').height()) {
				zhong2 = $('#to').height() - $('.ddb').height();
			}

			$('.ddb').css({
				left: zhong1 + 'px',
				top: zhong2 + 'px'
			});

			$('#bmg').css({
				left: -zhong1 * 3.6 + 'px',
				top: -zhong2 * 1.7 + 'px'
			})
		})

		oAj.bind('click', function() {
			let value = Number(oBian.val()) + 1;
			oBian.val(value);
		})

		oAji.bind('click', function() {
			let value = Number(oBian.val()) - 1;
			if(value <= -1) {
				value = 0,
					alert('商品数量不能小于0！')
			}
			oBian.val(value);
		})

		$('#xxk li').bind('click', function() {
			let index = $(this).index();

			$('#xxk li').removeClass('active3');
			$(this).addClass('active3')

			$('.xiaoshi').removeClass('xiao2').eq(index).addClass('xiao2');
		})

		let oTop = $("#sans").offset().top,
			sTop;
		$(window).scroll(function() {
			sTop = $(this).scrollTop();
			if(sTop >= oTop) {
				$("#sans").css({
					"position": "fixed",
					"top": "0"
				});
			} else {
				$("#sans").css({
					"position": "absolute",
					"top": "526px"
				});
			}
		});

		$(".di1").click(function() {
			$('body,html').animate({
				scrollTop: 526
			}, 500);
		})

		$(".di2").click(function() {
			$('body,html').animate({
				scrollTop: 8586
			}, 500);
		})

		$(".di3").click(function() {
			$('body,html').animate({
				scrollTop: 8586
			}, 500);
		})
		
		oQqa1.click(function(){
			let  num = Number(oVal.val())-1;
			if(num<=0){
				num=1,
				alert('当前位置是第一页!')
			}
			oVal.val(num);	
		})
		oQqa2.click(function(){
			let  num = Number(oVal.val())+1;
			oVal.val(num);	
		})
		
		
		let qindex = 0;
		$('#yqos div').bind('mouseenter', function() {
		 qindex = $(this).index();
		$('#yqos div').removeClass('bbai');
		$(this).addClass('bbai');
		moveq();
	})
		
		setInterval(function(){
			qindex++;
			if(qindex===6){
				qindex=0
			}
			moveq();
			$('.bba').removeClass('bbai').eq(qindex).addClass('bbai');
		},3000)
		
		function moveq(){
			$('#uuk').stop(true).animate({
				left: -(qindex+1)*780
			})
		}
		
		
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
			if(i === 3) {
				oUk.css('left', 0)
			}
			oUk.stop(true).animate({
				left: -i * 960
			}, 1000)
		}
		
		
			$("#do5").click(function(){
       $('body,html').animate({scrollTop:0},500);
 })
		
	});
})(jQuery)