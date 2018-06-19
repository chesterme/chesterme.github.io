// 为段落标签的下一个元素节点设置样式
function styleHeaderSiblings(){
	// 判断浏览器是否支持dom方法
	if(!document.getElementsByTagName) return false;
	var headers = document.getElementsByTagName("h1");
	var element;
	for(var i = 0; i < headers.length; i++){
		element = getNextElement(headers[i].nextSibling);
		// 改变样式
		// element.style.fontWeight = "bold";
		// element.style.fontSize = "1.2em";
		// element.style.color="red";
		addClass(element, "intro");
	}
}

// 获取node节点的下一个元素节点
function getNextElement(node){
	if(node.nodeType == 1){
		return node;
	}
	if(node.nextSibling){
			return getNextElement(node.nextSibling);
	}
	return null;
}

// 为某个元素节点添加class属性
function addClass(element, value){
	if(!element.className){
		element.className = value;
	}else{
		newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}

addLoadEvent(styleHeaderSiblings);