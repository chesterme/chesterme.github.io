function prepareSlideshow(){
	// 确保浏览器支持DOM方法
	if(!document.getElementsByTagName || !document.getElementById) return false;
	// 确保元素存在
	if(!document.getElementById("linklist") || !document.getElementById("preview")) return false;
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id", "slideshow");
	var preview = document.createElement("img");
	preview.setAttribute("src", "./img/animate123-100w.gif");
	preview.setAttribute("alt", "building blocks of web design");
	preview.setAtribute("id", "preview");
	slideshow.appendChild(preview);
	var list = document.getElementById("linklist");
	insertAfter(slideshow, list);
	// 取得列表中所有链接
	var links = list.getElementsByTagName("a");
	// 为mouseover事件添加动画效果
	links[0].onmouseover = function(){
		moveElement("preview", -100, 0, 10);
	}
	links[1].onmouseover = function(){
		moveElement("preview", -200, 0, 10);
	}
	links[2].onmouseover = function(){
		moveElement("preview", -300, 0, 10);
	}
}

function insertAfter(newElement, targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}

addLoadEvent(prepareSlideshow);