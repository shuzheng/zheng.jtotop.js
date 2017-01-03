## zheng.jtotop.js

* Scroll to the top of the page with jQuery

* 返回顶部插件(可以任意速度滑动到指定任意位置)

# 使用方法

* 引入zheng.jtotop.js
```html
<script type="text/javascript" src="js/zheng.jtotop.js"></script>
```

* 示例代码
```js
$(document).ready(function(){
	//四种静态方法调用
	$("#shang").click(function(){
		$.top();//点击后到顶部
	});
	$("#zhong").click(function(){
		$.toId("myId");//点击后到指定位置
	});
	$("#xia").click(function(){
		$.footer();//点击后到底部
	});
	$("#zidingyi").click(function(){
		$.jTo("here",5000);//点击后到底部
	});
	//一种对象方法，直接加在对象上的方法，格式如下
	$("#totop").jToTop();
});
```

演示地址 : [http://www.zhangshuzheng.cn/zheng.jtotop.js/demo/](http://www.zhangshuzheng.cn/zheng.jtotop.js/demo/ "zheng.jtotop.js")
