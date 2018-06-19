// 改变特定元素的位置
function positionMessage(){
	if(!document.getElementById || ! document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";
	movement = setTimeout("moveMessage()", 500);
	
}

// 某个元素的位置
function moveMessage(){
	if(!document.getElementById || !document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	// 获取元素当前的位置
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);

	// 是否到达目的地
	if(xpos == 200 && ypos == 100){
		return true;
	}

	if(xpos < 200){
		xpos++;
	}
	if(xpos > 200){
		xpos--;
	}

	if(ypos < 100){
		ypos++;
	}
	if(ypos > 100){
		ypos--;
	}

	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";

	// 设置停顿时间
	movement = setTimeout("moveMessage()", 10);
}

addLoadEvent(positionMessage);
