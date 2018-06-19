// 获取文档中所有缩略语的内容，包括title属性和文本内容
function displayAbbreviations(){
	// 检查兼容性
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;

	// 找出所有的abbr元素
	var abbreviations = document.getElementsByTagName("abbr");
	// 如果文档没有缩略语，函数就结束
	if (abbreviations.length < 1) return false;
	// 创建一个数组
	var defs = new Array();
	// 遍历所有的缩略语
	for(var i = 0; i < abbreviations.length; i++){
		// 得到当前的缩略语
		var current_abbr = abbreviations[i];
		// 如果当前节点没有子节点，就立即开始下一次循环
		if (current_abbr.childNodes.length < 1) continue;
		// 得到缩略语的解释文字
		var definition = current_abbr.getAttribute("title");
		// 得到缩略语包含的文本
		var key = current_abbr.lastChild.nodeValue;
		// 将key与difinition利用数组关联起来
		defs[key] = definition;
	}

	// 创建定义列表
	var dlist = document.createElement("dl");
	// 使用for-in的形式遍历defs数组
	for(key in defs){
		// 获取当前key对应的value
		var definition = defs[key];
		// 创建dt元素
		var dtitle = document.createElement("dt");
		// 使用变量key的值创建一个文本节点
		var dtitle_text = document.createTextNode(key);
		// 将文本节点添加到dtitle元素节点上
		dtitle.appendChild(dtitle_text);
		// 重复这个过程创建dd元素
		var ddescript = document.createElement("dd");
		var ddescript_text = document.createTextNode(definition);
		ddescript.appendChild(ddescript_text);

		// 将dtitle和ddescript节点添加到dlist节点上
		dlist.appendChild(dtitle);
		dlist.appendChild(ddescript);
	}

	// 如果对应于缩略语列表的那个dl元素没有任何子节点，则立即退出函数
	if(dlist.childNodes.length < 1) return false;

	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);

	// 将列表插入到文档中
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);