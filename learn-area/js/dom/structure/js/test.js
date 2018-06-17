function writeSomething(){
	document.write("<p>This is inserted. </p>");
}

function insertParagraph(text){
	var str = "<p>";
	str += text;
	str += "</p>";
	document.write(str);
}

function addLoadEvent(func){
	var oldOnload = window.onload;
	if(window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldOnload();
			func();
		};
	}
}

addLoadEvent(writeSomething);
addLoadEvent(insertParagraph("jjjj"));
