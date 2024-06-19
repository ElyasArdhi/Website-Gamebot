function Catapult(){
	this.x = 200;
	this.y = 200;

	this.height = 100;
	var that = this;
	this.element = document.createElement("div");

	this.drawCatapult = function(){
		console.log('drawing catapult');	
	}

	this.setpos = function(){
		this.element.style.left = 200+'px';
		this.element.style.top = 335 +'px';
	}

	this.appendTo = function(parentElement) {
		parentElement.appendChild(this.element);	
	}
}