function addLoadEven(func){
	var oldOnload = window.onload;
	if(window.onload != 'function'){
		window.onload = func;
	}else{
		oldOnload();
		func();
	}
}

function insertComplexElement(){
	var paragraph = document.createElement("p");
	var text1 = document.createTextNode("This is ");
	paragraph.appendChild(text1);
	var emphasize = document.createElement("em");
	var text_em = document.createTextNode("my");
	emphasize.appendChild(text_em);
	paragraph.appendChild(emphasize);
	var text2 = document.createTextNode(" content.");
	paragraph.appendChild(text2);
	var parent = document.getElementById("testdiv");
	parent.appendChild(paragraph);
}


function insertElement(){
	// 创建一个元素节点，指向p元素
	var paragraph = document.createElement("p");
	// 获取id为testdiv的div容器
	var parent = document.getElementById("testdiv");
	// 将新节点变成parent节点的子节点
	parent.appendChild(paragraph);
	// 创建一个文档节点，并初始化其内容
	var txt = document.createTextNode("Hello world!");
	// 将该文档节点添加到段落节点中
	paragraph.appendChild(txt);
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

addLoadEven(insertElement);
addLoadEven(insertComplexElement);
addLoadEven(preparePlaceholder);