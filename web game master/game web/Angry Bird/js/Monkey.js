function Monkey(){
	var that = this;
	this.element = document.createElement("div");
		
	this.x = 0;
	this.y = 0;

	this.width = 45;
	this.radius = 20;
	this.groundlevel = 415;
	this.startpoint = 990;

	this.setpos = function(x,y){
		this.x = this.startpoint + x;
		this.y = this.groundlevel - y;

		this.element.style.left = this.x +'px';
		this.element.style.top  = this.y +'px';
	}

	this.appendTo = function(parentElement){
		parentElement.appendChild(this.element);	
	}

	this.removeFrom = function(parentElement){
		parentElement.removeChild(this.element);
	}

}