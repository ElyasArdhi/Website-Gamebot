function monkeyhouse(){
	this.element = document.createElement("div");
	 that = this;
	
	var boxes = [];
	this.groundlevel = 455;
	this.startpoint = 800;


	this.createhouse = function(){
		console.log('creating monkey house');
		for(var i=0;i<data[0].box.length;i++){
			boxes[i] = new Box;
			boxes[i].element.setAttribute("class","brick glass");
			boxes[i].createbox(data[0].box[i].w,data[0].box[i].h);
			boxes[i].setpos(data[0].box[i].x,data[0].box[i].y);
			that.appendChild(boxes[i].element);
		}
	}
}