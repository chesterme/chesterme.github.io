function displayCitations(){

	// 方法测试
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;

	// 找出文档中所有的blockquote元素
	var quotes = document.getElementsByTagName("blockquote");
	// 遍历这些元素
	for(var i = 0; i < quotes.length; i++){
		// 判断是否存在cite属性
		if(!quotes[i].getAttribute("cite")) continue;
		// 保存cite属性
		var url = quotes[i].getAttribute("cite");
		// 得到当前blockquote元素所包含的所有元素节点
		var quoteChildren = quotes[i].getElementsByTagName("*");
		// 检查长度
		if(quoteChildren.length < 1) continue;
		// 得到当前blockquote元素包含的最后一个元素节点
		var element = quoteChildren[quoteChildren.length - 1];

		// 创建一个链接
		var link = document.createElement("a");
		var link_text = document.createTextNode("source");
		link.setAttribute("href", url);
		link.appendChild(link_text);
		
		// 插入链接
		var superscript = document.createElement("sup");
		superscript.appendChild(link);

		// 将superscript插入文档中
		element.appendChild(superscript);
	}
}

addLoadEvent(displayCitations);