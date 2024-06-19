function Bird(){
	var that = this;
	this.element = document.createElement("div");

	this.x = 0;
	this.y = 0;

	this.width = 45;
	this.radius = 20;
	this.groundlevel = 455;
	console.log('from bird');

	this.setpos = function(x,y){

		this.x = x;
		this.y = this.groundlevel-y;

		this.element.style.left = this.x + 'px';
		this.element.style.top = this.y + 'px';
//		console.log(x);
//		console.log(y);
	}

	this.brickCollide = function(currentBrick){
		
		var cornerDistanceSq;
		var tempx,tempY;
		tempX = Math.abs((that.x+25) - currentBrick.x);
    	tempY = Math.abs((that.y+25) - currentBrick.y);

    	if (tempX > (currentBrick.w/2 + that.radius)) { return false; }
    	if (tempY > (currentBrick.h/2 + that.radius)) { return false; }

	    if (tempX <= (currentBrick.w/2)) { return true; } 
    	if (tempY <= (currentBrick.h/2)) { return true; }

    	cornerDistanceSq = Math.sqrt(tempX - currentBrick.w/2) + Math.sqrt(tempY - currentBrick.h/2);

    return (cornerDistanceSq <= (Math.sqrt(that.radius)));
	}

	this.monkeyCollide = function(currentMonkey){
		var a,x,y;
		a = that.radius + currentMonkey.radius;
		x = that.x - currentMonkey.x;
		y = that.y - currentMonkey.y;
		if ( a > Math.sqrt( (x*x) + (y*y) ) ) {
        	return true;
    	}
    	else{
    	    return false;
    	}
	}

	this.appendTo = function(parentElement) {
		parentElement.appendChild(this.element);	
	}

	this.removeFrom = function(parentElement){
		parentElement.removeChild(this.element);
	}

}
