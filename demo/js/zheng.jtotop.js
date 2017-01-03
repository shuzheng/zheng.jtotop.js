/**
 * Copyright (c) 2011, Zhang Shuzheng
 * All rights reserved.
 *
 * QQ:46974114
 * E-mail:469741414@qq.com
 * http://www.zhangshuzheng.cn
 * https://github.com/shuzheng/zheng.jtotop.js
 * versioin: 1.0.0
 */
(function($){
	//对象方法
	$.fn.jToTop = function(){
		return this.each(function(){
			$(this).click(function(){
				$.top();
				return false;
			});	
		});
	}
	//添加静态方法
	$.extend({  
		top:function(){
			scrollToAim(0,"slow");
		},
		footer:function(){
			scrollToAim(1,"slow");
		},
		toId:function(id){
			scrollToAim(id,"slow");
		},
		jTo:function(id,speed){
			scrollToAim(id,speed)
		}
	});
	//
	function scrollToAim(id,speed){
		var here;
		//滚动目标
		if(id==0){
			here=0;
		}else if(id==1){
			here=bodyHeight();
		}else{
			here=$("#"+id).offset().top;
		}
		//开始滑动
		$("html, body").animate({scrollTop:here}, speed);
		return false;
	}
	//返回全文页面高度
	function bodyHeight(){
		return document.body.scrollHeight;
	}
})(jQuery);