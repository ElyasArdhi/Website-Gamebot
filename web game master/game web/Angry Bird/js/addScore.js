function addScore(){
	
	var that = this;
	this.element = document.createElement("div");

	this.x =0;
	this.y =0;
	this.element.style.opacity = 1;
	var opacityValue =0.0;

	this.setpos = function(x,y){

		this.x = x;
		this.y = this.groundlevel-y;

		this.element.style.left = this.x + 'px';
		this.element.style.top = this.y + 'px';
		this.element.style.opacity = "1.0";
//		console.log(x);
//		console.log(y);
	}


	this.appear = function(){
		var myinterval = setInterval(function(){
			opacityValue+=0.01;
			that.element.style.opacity=opacityValue;
			if(that.element.style.opacity ==1){
				disappear();
				clearInterval(myinterval);
			}
		}, 5);
	}

	function disappear(){
			var myintervalid = setInterval(function(){
			opacityValue-=0.001;
			that.element.style.opacity=opacityValue;
			if(that.element.style.opacity <0){
				that.element.style.visibility = 'hidden';
				clearInterval(myintervalid);
			}
		}, 5);
	}

}