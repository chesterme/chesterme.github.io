function addLoadEvent(func){
	// 把现有的window.onload事件处理函数的值保存在变量oldOnload中
	var oldOnload = window.onload;
	// 如果在这个处理函数上还没有绑定任何函数，则把新函数添加给它
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldOnload();
			func();
		}
	}
}