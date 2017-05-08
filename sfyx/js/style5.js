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
		
		
				var oList = document.getElementById('cookiee');
	// 获取数据，将字符串类型的数据转换成对象类型的数据
	var aGoods = JSON.parse(getCookie('goods'));

	// 将商品数据显示到页面中
	aGoods.forEach(function (v) {
		var oLi = document.createElement('div');
		oLi.setAttribute('class','googs1');
		oLi.innerHTML = '<input type="checkbox" /><img src="' + v.url+ '" /><a href="javascript:;" class="ssa goods-name">' + v.name + ' </a><span class="goods-price">' + v.price+ '</span><a href="javascript:;" class="mmy">-</a><input type="text" class="fanfan" value="' + v.num +'" /><a href="javascript:;" class="myy">+</a><label class="la">1.1kg</label><span class="xj">' + v.price+ '</span><label class="xx">现货</label><a href="#" class="ss">收藏</a><a href="javascript:;" class="del sc" data-id="' + v.id + '">删除</a>';
		                
		oList.appendChild(oLi);
	});
	

	// 将商品从购物车中删除
	var aDel = document.getElementsByClassName('del');

	for(var i = 0; i < aDel.length; i++) {
		aDel[i].onclick = function () {
			var aGoods = JSON.parse(getCookie('goods'));

			// 对商品进行循环，对指定的商品移除
			for(var i = 0; i < aGoods.length; i++) {
				if(aGoods[i].id === this.getAttribute('data-id')) {
					aGoods.splice(i, 1);
					//将删除后的数组再存放到cookie里面去
					setCookie('goods', JSON.stringify(aGoods), 7);

					// 移除节点
					oList.removeChild(this.parentNode);
					break;
				}
			}
		}
	}
	
	
		$('.myy').bind('click', function() {
		let  a = $(this).siblings('.fanfan').val();
		      a++;
		$(this).siblings('.fanfan').val(a);	

		$('.xj').val( a*$('.goods-price').val());
		})
			
		
			$('.mmy').bind('click', function() {
		let  a = $(this).siblings('.fanfan').val();
		      a--;
		      if(a<=0){
		      	a=1;
		      	alert('商品数量不能小于1！')
		      }
		$(this).siblings('.fanfan').val(a);	
		})

	});
})(jQuery)