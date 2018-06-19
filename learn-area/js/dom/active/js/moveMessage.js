/**
	移动某个元素
	@elementID: 元素ID
	@final_x， @final_y: 元素最终移动的位置
	@interval: 每次移动的时间间隔
**/
function moveElement(elementID, final_x, final_y, interval){
	if (!document.getElementById || !document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	if(elem.movement){
		clearTimeout(elem.movement);
	}
	// 检查elem元素是否存在left和top属性
	if(!elem.style.left){
		elem.style.left = "0px";
	}
	if(!elem.style.top){
		elem.style.top = "0px";
	}
	// 获取元素当前的位置
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if(xpos == final_x && ypos == final_y){
		return true;
	}

	var dist = 0;
	if(xpos < final_x){
		// xpos++;
		dist = Math.ceil((final_x - xpos) / 10);
		xpos += dist;
	}
	if(xpos > final_x){
		// xpos--;
		dist = Math.ceil((xpos - final_x) / 10);
		xpos -= dist;
	}
	if(ypos < final_y){
		// ypos++;
		dist = Math.ceil((final_y - ypos) / 10);
		ypos += dist;
	}
	if(ypos > final_y){
		// ypos--;
		dist = Math.ceil((ypos - final_x) / 10);
		ypos -= dist;
	}

	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";

	// 设置停顿时间
	var repeat = "moveElement('" + elementID + "', " + final_x + ", " + final_y + ", " + interval + ")";
	elem.movement = setTimeout(repeat, interval);
}

// 改变特定元素的位置
function positionMessage(){
	if(!document.getElementById || ! document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";
	moveElement("message", 125, 25, 10);

	if(!document.getElementById || ! document.getElementById("message2")) return false;
	var elem = document.getElementById("message2");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "50px";
	moveElement("message2", 125, 125, 20);
}

addLoadEvent(positionMessage);