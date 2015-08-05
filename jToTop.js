/**
 * Copyright (c) 2011, Zhang Shuzheng
 * All rights reserved.
 *
 * QQ:46974114
 * E-mail:mail@zhangshuzheng.com
 * http://www.zhangshuzheng.cn
 *
 */
(function($){
	//我们的“debug”方法不能从外部闭包进入,因此对于我们的实现是私有的。
	//debug(this);
	//function debug($obj){
	//	if (window.console && window.console.log){
	//		window.console.log('hilight selection count: ' + $obj.size());
	//	}
	//};
	
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
		if($.browser.safari){//非IE
			$("body").animate({scrollTop:here}, speed); 
		}else{//IE
			$("html").animate({scrollTop:here}, speed);
		}
		return false;
	}
	//返回全文页面高度
	function bodyHeight(){
		return document.body.scrollHeight;
	}
	/**=============================================================================================================
	* 一些备用函数
	*
	*function bodyWidth(){//返回全文页面宽度
	*	return document.body.scrollWidt;
	*}
	*function pageHeight(){//返回当前页面高度
	*	if($.browser.msie){
	*		return document.compatMode == "CSS1Compat"?document.documentElement.clientHeight:document.body.clientHeight;
	*	}else{
	*		return self.innerHeight;
	*	}
	*}
	*function pageWidth(){//返回当前页面宽度
	*	if($.browser.msie){
	*		return document.compatMode == "CSS1Compat"?document.documentElement.clientWidth:document.body.clientWidth;
	*	}else{
	*		return self.innerWidth;
	*	}
	*}
	*网页可见区域宽：document.body.clientWidth
	*网页可见区域高：document.body.clientHeight
	*网页可见区域宽：document.body.offsetWidth (包括边线的宽)
	*网页可见区域高：document.body.offsetHeight (包括边线的宽)
	*网页正文全文宽：document.body.scrollWidth
	*网页正文全文高：document.body.scrollHeight
	*网页被卷去的高：document.body.scrollTop
	*网页被卷去的左：document.body.scrollLeft
	*网页正文部分上：window.screenTop
	*网页正文部分左：window.screenLeft
	*屏幕分辨率的高：window.screen.height
	*屏幕分辨率的宽：window.screen.width
	*屏幕可用工作区高度：window.screen.availHeight
	*屏幕可用工作区宽度：window.screen.availWidth
	====================================================================================================================*/
})(jQuery);