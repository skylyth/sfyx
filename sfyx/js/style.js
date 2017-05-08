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
			aBtnListA = $('#btn-list a'),
			aImgListLi = $('#img-list li'),
			oLun = $('#lun'),
			oTop = $('#top'),
			oMid = $('#mid'),
			oBot = $('#bot'),
			oA1 = $('.a1'),
			oA2 = $('.a2'),
			oA3 = $('.a3'),
			oD5 = $('#d5'),
			oD6 = $('#d6'),
			oD8 = $('#d8'),
			oD9 = $('#d9'),
			oBtnl = $('#lef-btn'),
			oBtnr = $('#rig-btn'),
			oSp1 = $('.sp1'),
			oSp2 = $('.sp2'),
			oPlun = $('.plun'),
			oList = $('#list'),
			oD9Text = oD9.text(),
			iTimer = null,
			oLunbo = $('#lunbo'),
			iIndex = 0,
			kIndex = 0,
			index = 0;

		
		
		function hover(j,k){
			j.hover(function(){
				k.css('display', 'block')
			},function(){
				k.css('display', 'none')
			});
		}
		
		hover(Span,address);
		hover(address,address);
        hover(li3,oYou);
        hover(oYou,oYou);
        hover(li5,oHelp);
        hover(oHelp,oHelp);
        hover(li6,oNav);
        hover(oNav,oNav);
        hover(oPan,oAdrs);
        hover(oCar,oGoos);
        hover(oCars,oGoos);
        hover(oSpn1,oLan);
		hover(oLan,oLan);
        hover(oSpn2,oApp);
		hover(oApp,oApp);
        hover(oSpn3,oShu);
		hover(oShu,oShu);
		hover(oSpn4,oJiu);
		hover(oJiu,oJiu);
        hover(oSpn5,oXin);
		hover(oXin,oXin);
        hover(oSpn6,oLiang);
		hover(oLiang,oLiang);
        hover(oSpn7,oCha);
		hover(oCha,oCha);
		hover(oSpn8,oGuo);
		hover(oGuo,oGuo);
		
		hover(oCcc,oSs1);
		hover(oCcd,oSs2);
        hover(oCce,oSs3);
		hover(oCcf,oSs4);




		oLun.hover(function() {
			clearInterval(iTimer)
		}, function() {
			autoMove();
		});
		oTop.hover(function() {
			oA2.css("display", "block");
			oA3.css("display", "block");
		}, function() {
			oA2.css("display", "none");
			oA3.css("display", "none");
		});

		oMid.hover(function() {
			oA1.css("display", "block");
			oA3.css("display", "block");
		}, function() {
			oA1.css("display", "none");
			oA3.css("display", "none");
		});

		oBot.hover(function() {
			oA1.css("display", "block");
			oA2.css("display", "block");
		}, function() {
			oA1.css("display", "none");
			oA2.css("display", "none");
		});
		aBtnListA.bind('mouseenter', function() {
			iIndex = $(this).index();
			aImgListLi.each(function(k, v) {
				if(k === iIndex) {
					$(this).stop(true).animate({
						opacity: 1
					}, function() {
						$(this).css({
							zIndex: 1
						});
					});
				} else {
					$(this).stop(true).animate({
						opacity: 0
					}, function() {
						$(this).css({
							zIndex: 0
						});
					});
				}
			});
			aBtnListA.removeClass('active').eq(iIndex).addClass('active');
		});
		autoMove();
		setInterval(function() {
			index++;
			if(index === 0) {
				$("#lunbo").css("background-color", "rgb(243, 238, 221)");
			};
			if(index === 1) {
				$("#lunbo").css("background-color", "rgb(255, 83, 140)");
			};
			if(index === 2) {
				$("#lunbo").css("background-color", "rgb(251, 247, 246)");
			};
			if(index === 3) {
				$("#lunbo").css("background-color", "rgb(252, 221, 149)");
			};
			if(index === 3) {
				index = 0;
			}
		}, 3000);

		function autoMove() {
			iTimer = setInterval(function() {
				iIndex++;
				if(iIndex < 0) {
					iIndex = aBtnListA.size() - 1;
				}
				if(iIndex >= aBtnListA.size()) {
					iIndex = 0;
				}
				aImgListLi.each(function(k, v) {
					var iNum = k === iIndex ? 1 : 0;
					$(this).stop(true).animate({
						opacity: iNum
					}, function() {
						$(this).css({
							zIndex: iNum
						});
					});
				});
				aBtnListA.removeClass('active').eq(iIndex).addClass('active');
			}, 3000);
		};

		var
			od9 = document.getElementById('d9'),
			od8 = document.getElementById('d8'),
			od6 = document.getElementById('d6'),
			od5 = document.getElementById('d5');

		setInterval(function() {
			od9.innerHTML--
				if(od9.innerHTML == -1) {
					od9.innerHTML = 9;
					od8.innerHTML--;
				}
			if(od9.innerHTML == 0 && od8.innerHTML == 0) {
				od8.innerHTML = 5;
				od9.innerHTML = 9;
				od6.innerHTML--;
			}
			if(od6.innerHTML == -1) {
				od6.innerHTML = 9;
				od5.innerHTML--;
			}

		}, 1000);

		oBtnl.bind('click', function() {
			if(oList.css('left') == '0px') {
				oList.stop(true).animate({
					left: -170
				});
			} else {
				oList.stop(true).animate({
					left: 0
				});
			}
		})

		oBtnl.bind('click', function() {
			kIndex++;
			if(kIndex === 2) {
				kIndex = 0
			};
			if(kIndex === 1) {
				oSp1.css("background-color", "#BCBCBC")
				oSp2.css("background-color", "#55A532")
			} else {
				oSp1.css("background-color", "#55A532")
				oSp2.css("background-color", "#BCBCBC")
			}
		})

		oBtnr.bind('click', function() {
			kIndex++;
			if(kIndex === 2) {
				kIndex = 0
			};
			if(kIndex === 1) {
				oSp1.css("background-color", "#BCBCBC")
				oSp2.css("background-color", "#55A532")
			} else {
				oSp1.css("background-color", "#55A532")
				oSp2.css("background-color", "#BCBCBC")
			}
		})

		oBtnr.bind('click', function() {
			if(oList.css('left') == '-170px') {
				oList.stop(true).animate({
					left: 0
				})
			} else {
				oList.stop(true).animate({
					left: -170
				})
			}
		})

		oSp1.bind('mouseenter', function() {
			if(oList.css('left') == '-170px') {
				oList.stop(true).animate({
					left: 0
				})
				oSp1.css("background-color", "#55A532")
				oSp2.css("background-color", "#BCBCBC")
			}
		})

		oSp2.bind('mouseenter', function() {
			if(oList.css('left') == '0px') {
				oList.stop(true).animate({
					left: -170
				})
				oSp2.css("background-color", "#55A532")
				oSp1.css("background-color", "#BCBCBC")
			}
		})

		setInterval(function() {
			oPlun.delay(3000).animate({
				top: -148
			},2000)
		}, 1000)

		setInterval(function() {
			oPlun.delay(3000).animate({
				top: -292
			},2000)
		}, 2000)

		setInterval(function() {
			oPlun.delay(3000).animate({
				top: 0
			},2000)
		}, 2000)
		
		$("#do5").click(function(){
       $('body,html').animate({scrollTop:0},500);
 })
		
		
		
		      // 获取添加按钮
	var aAdd = document.getElementsByClassName('add');

	// 给每个添加按钮添加onclick事件
	for(var i = 0; i < aAdd.length; i++) {
		aAdd[i].onclick = function () {
			// 从cookie里面读取商品
			var aGoods = getCookie('goods');
			console.log(aGoods);

			// 如果读取到的结果是undefined，那么也就意味着这是第一次添加商品
			if(aGoods === undefined) {
				var aGoods = []; // aGoods相当于购物车
			} else {
				aGoods = JSON.parse(aGoods);
			}
			// 添加商品的数据：ID、商品名称、商品图片URL、商品价格、商品数量
			var
				dataId    = this.getAttribute('data-id'),
				dataTitle = this.getAttribute('data-title'),
				dataUrl   = this.getAttribute('data-url'),
				dataPrice = this.getAttribute('data-price'),
				dataNum	  = 1;

			// 检测商品在购物车是否已存在
			var isExist = false; // 假设该商品不存在
			aGoods.forEach(function (v) {
				if(v.id == dataId) {
					v.num++;
					isExist = true;
				}
			});

			if(isExist === false) {
				// 一个对象代表一件商品
				var oGoods = {
					id: dataId,
					name: dataTitle,
					url: dataUrl,
					price: dataPrice,
					num: dataNum
				};

				// 将商品添加到购物车中去
				aGoods.push(oGoods);
			}

			// 将数据添加到cookie中
			setCookie('goods', JSON.stringify(aGoods), 7);
		}
	}
		
		

	});
})(jQuery)