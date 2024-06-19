function Box(){
	var that = this;
	this.element = document.createElement("div");
	
	this.w = 0;
	this.h = 0;

	this.x = 0;
	this.y = 0;

	this.groundlevel = 455;
	this.startpoint = 1000;

	this.setpos = function(x,y){
		this.x = this.startpoint + x;
		this.y = this.groundlevel - y;
//		console.log(x);
//		console.log(y);

		this.element.style.left = this.x +'px';
		this.element.style.top  = this.y +'px';
	}

	this.createbox = function(w,h){
		this.width = w;
		this.height = h;

		this.element.style.width = w+'px';
		this.element.style.height = h+'px';
	}

	this.appendTo = function(parentElement){
		parentElement.appendChild(this.element);	
		console.log('appending to parent');
	}

	this.removeFrom = function(parentElement){
		parentElement.removeChild(this.element);
	}
}