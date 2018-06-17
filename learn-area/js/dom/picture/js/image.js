function showPic(whichpic){
	// 检查id为placehold的图片是否存在
	if (!document.getElementById("placehold")) return false;
	// 获取href属性内容
	var source = whichpic.getAttribute("href");
	// 获取id为placehold的元素对象
	var placehold = document.getElementById("placehold");
	// 判断placehold是否是图片对象
	if (placehold.nodeName != "IMG") return false;
	// 重置placehold对象的src属性
	placehold.setAttribute("src", source);
	// 检查id为description的段落是否存在
	if (document.getElementById("description")) {
		// 获取title属性
		var text = whichpic.getAttribute("title");
		if (text == null) text = "";
		// 获取放置文本的文本段落
		var description = document.getElementById("description");
		// 判断description的第一个子节点是否是文本节点
		if(description.firstChild.nodeType == 3){
			// 重置文本段落显示内容
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}

function prepareAnimate(){
	// 检查当前浏览器是否支持getElementByTagName或getElementById其中之一
	if(!document.getElementsByTagName || !document.getElementById || !document.getElementById("animate")) return false;
	// 获取id为animate的对象
	var gallery = document.getElementById("animate");
	// 获取gallery节点的所有链接
	var links = gallery.getElementsByTagName("a");
	// 遍历所有的链接
	for(var i = 0; i < links.length; i++){
		// 为每个链接添加onclick事件处理函数
		links[i].onclick = function(){
			// 如果showPic函数返回true，则浏览器不会在窗口中打开这个链接；否则，打开链接
			return !showPic(this);
		};
	}
}

// 绑定某个函数到windown.onload
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

addLoadEvent(prepareAnimate);