(function(){
	$(function(){
		let 
		    oGren = $('.geren'),
		    oQye = $('.qiye'),
		    oMain = $('#main'),
		    oMainn = $('#mainn'),
		    oYyy = $('.yyy'),
		    oKkk = $('kkk'),
		    oBu  = $('.bu'),
		    suiji = parseInt(Math.random()*10000);
		    
		    oGren.bind('click',function(){
		    	oGren.css("background-image","url(images/tabbg.jpg)"),
		    	oQye.css("background-image","url(images/tabbg1.jpg)"),
		    	oMain.css("display","block"),
		    	oMainn.css("display","none")
		    })
		    

		    
		     oQye.bind('click',function(){
		    	oQye.css("background-image","url(images/tabbg.jpg)"),
		    	oGren.css("background-image","url(images/tabbg1.jpg)"),
		    	oMain.css("display","none"),
		    	oMainn.css("display","block")
		    })
		     
		     
//		     var
//		oemil=$('#email');
//		opas=$('#password');
//		opas2=$('#password2');
//		obtn=$('#registerButton');
//		oreg = /^1[345789][0-9]{9}/;
//		odeg=/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;
//		ozhang='';//存储的账号
//		omi='';//存储的密码
//		oemil.blur(function(){
//			if($.trim(oemil.val())==''){
//				$('#email_empty').css('display','block');
//				$('#email_error').css('display','none');
//				
//				}
//			else if(!oreg.test($.trim(oemil.val()))){
//				
//				$('#email_error').css('display','block');
//				$('#email_error').text('手机格式不正确');
//				$('#email_empty').css('display','none');
//				$('#email_true').css('display','none');
//				}
//			else{
//				//账号
//				$('#email_empty').css('display','none');
//				$('#email_error').css('display','none')
//				$('#email_error').text('')
//				$('#email_true').css('display','block')
//				ozhang= oemil.val()//当用户名的所有判断完成时，让用户名框的内容等于ozhang
//				
//				}
//			return ozhang//return出去
//			})
//		
//		
//		opas.blur(function(){
//			if($.trim(opas.val())==''){
//				$('#password_empty').css('display','block');
//				$('#password_error').css('display','none');
//				
//				}
//			else if(!odeg.test($.trim(opas.val()))){
//				
//				$('#password_error').css('display','block');
//				$('#password_error').text('密码长度建议至少6位');
//				$('#password_empty').css('display','none');
//				$('#password_true').css('display','none');
//				}
//			else{
//				//密码
//				$('#password_empty').css('display','none');
//				$('#password_error').css('display','none')
//				$('#password_error').text('')
//				$('#password_true').css('display','block')
//				
//				
//				}
//			
//		})
//		opas2.blur(function(){
//			if($.trim(opas2.val())==''){
//				
//				$('#password2_error').css('display','block');
//				$('#password2_error').text('确认密码不能为空');
//			}
//			else if(opas2.val()!=opas.val()){
//				$('#password2_error').css('display','block');
//				$('#password2_error').text('两次密码不相同');
//			}
//			else{
//				$('#password2_error').css('display','none');
//				$('#password2_error').text('');
//				
//				omi= opas2.val()//当密码的所有判断完成时，让用户名框的内容等于omi
//			}	
//			return omi	//return出去
//			
//		})
//		
//		obtn.click(function(){//注册按钮点击时
//			
//			if(ozhang!=''&&omi!=''){//如果他们两个不等于空，说明已经存人了值，并且符合规定
//
//				var
//					kg={
//						oz:ozhang,
//						om:omi
//					}
//					setCookie('deng',JSON.stringify(kg),7)
//				
//				window.location.href="denglu.html"
//			}
//		})
	})
})(jQuery)
