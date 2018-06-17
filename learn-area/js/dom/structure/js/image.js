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
		// // 为每个链接添加onKeypress事件处理函数，onclick事件处理函数也能实现它的功能
		// links[i].onKeypress = function(){
		// 	return showPic(this) ? false : true;
		// };
		// // links[i].onKeypress = links[i].onclick;
	}
}

addLoadEvent(prepareAnimate);

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

function preparePlaceholder(){
	var image_node = document.createElement("img");
	image_node.setAttribute("id", "placehold");
	image_node.setAttribute("src", "./img/animate04-400w.jpg");
	image_node.setAttribute("alt", "my image placehold");
	var p_node = document.createElement("p");
	p_node.setAttribute("id", "description");
	var text_node = document.createTextNode("Choose an image");
	var body_node = document.getElementsByTagName("body")[0];
	body_node.appendChild(image_node);
	body_node.appendChild(p_node);
}

function preparePlaceholderBefoue(){
	var image_node = document.createElement("img");
	image_node.setAttribute("id", "placehold");
	image_node.setAttribute("src", "./img/animate04-400w.jpg");
	image_node.setAttribute("alt", "my image placehold");
	var p_node = document.createElement("p");
	p_node.setAttribute("id", "description");
	var text_node = document.createTextNode("Choose an image");
	p_node.appendChild(text_node);
	var ul_node = document.getElementById("animate");
	ul_node.parentNode.insertBefore(image_node, ul_node);
	ul_node.parentNode.insertBefore(p_node, ul_node);
}

function preparePlaceholderAfter(){
	var image_node = document.createElement("img");
	image_node.setAttribute("id", "placehold");
	image_node.setAttribute("src", "./img/animate04-400w.jpg");
	image_node.setAttribute("alt", "my image placehold");
	var p_node = document.createElement("p");
	p_node.setAttribute("id", "description");
	var text_node = document.createTextNode("Choose an image");
	p_node.appendChild(text_node);
	var ul_node = document.getElementById("animate");
	insertAfter(image_node, ul_node);
	insertAfter(p_node, image_node);
}

function insertAfter(newElement, targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}

addLoadEvent(preparePlaceholderAfter);
