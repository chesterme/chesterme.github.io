// 当鼠标指针悬停在某个表格行的上方时，把改行文本加粗并改变字体颜色
function hightlightRows(){
	if(!document.getElementsByTagName) return false;
	var rows = document.getElementsByTagName("tr");
	for(var i = 0; i < rows.length; i++){
		var temp_color = rows[i].style.color;
		var temp_fontWeight = rows[i].style.fontWeight;
		rows[i].onmouseover = function(){
			this.style.fontWeight = "bold";
			this.style.color = "red";
		}
		rows[i].onmouseout = function(){
			this.style.fontWeight = temp_fontWeight;
			this.style.color = temp_color;
		}
	}
}

addLoadEvent(hightlightRows);