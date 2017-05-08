

(function($) {
	$(function() {
		let
			oYxuan = $('.youxuan'),
			oSyun = $('.suyun'),
			oForm1 = $('.rom'),
			oForm2 = $('.form2');

		oSyun.bind('click', function() {
			oForm1.css('display', 'none'),
				oYxuan.removeClass('active').addClass('active2'),
				oForm2.css('display', 'block'),
				oSyun.removeClass('active2').addClass('active')
		})

		oYxuan.bind('click', function() {
			oForm2.css('display', 'none'),
				oSyun.removeClass('active').addClass('active2'),
				oForm1.css('display', 'block'),
				oYxuan.removeClass('active2').addClass('active')
		})

		$('.sub').bind('click', function() {
			let username = $('.pho').val(),
				password = $('.pass').val();

			if(username === '') {
				alert('用户名不能为空！')
				return false;
			}
			
//			if(username === 'skylyk'&&password ==='skylyk') {
//				console.log(1);
				window.location.href="http://localhost/sfyx/顺丰优选首页.html";
//			}

			if(password === '') {
				alert('密码不能为空！')
				return false;
			}
			
			
		})
		
	




// 从返回值对象中遍历出数据，将数据扔到一个新的数组中


		


            
            
            

	})
})(jQuery)