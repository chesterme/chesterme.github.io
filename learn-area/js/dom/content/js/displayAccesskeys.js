function displayAccesskeys(){
	// 检查兼容性
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;

	// 取得文档中的所有链接
	var links = document.getElementsByTagName("a");
	// 创建一个数组，保存访问键
	var akeys = new Array();
	// 遍历链接
	for(var i = 0; i < links.length; i++){
		var current_link = links[i];
		// 如果没有accesskey属性，继续循环
		if(!current_link.getAttribute("accesskey")) continue;
		// 取得accesskey的值
		var key = current_link.getAttribute("accesskey");
		// 取得链接文本
		var text = current_link.lastChild.nodeValue;
		// 添加到数组中
		akeys[key] = text;
	}

	// 创建列表
	var list = document.createElement("ul");
	for(key in akeys){
		var text = akeys[key];
		// 创建放入列表项中的字符串
		var str = key + ": " + text;
		var item = document.createElement("li");
		var item_text = document.createTextNode(str);
		item.appendChild(item_text);
		list.appendChild(item);
	}

	// 创建标题
	var header = document.createElement("h3");
	var header_text = document.createTextNode("Accesskeys");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(list);
}

addLoadEvent(displayAccesskeys);