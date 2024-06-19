function scene(){

	var monkeys = [];
	var birds = [];
	var bricks = [];
	var scoreBoard;
	var score = 0;
	var birdsleft = 4;
	var monkeysleft;
	var myactivebird = 0;
	var activebirdid;
	//for additional score
	var addscore = [];
	var x = 0;
	var y = 0;

	var rotatebird = false;
	
	var playinglevel = document.getElementById("playground");
	var that = this;
	var initialX=200;
	var initialY=100;
	
	var finalX=0;
	var finalY=0;

	var gravity = 9.8;
	var totaltime = 0;
	var time = 0;

	var monkeyhit = false;

	var myLevel = 0;
	var groundlevel = 455;
		
	this.drawscene = function(currentLevel){
		console.log(activeDiv);
		console.log('from drawscene');
		myLevel = currentLevel;
		for(var i = 0;i<data[myLevel].nobirds;i++){
			birds[i] = new Bird;
			birds[i].element.setAttribute("class","box green");
			birds[i].element.id='bird'+i;
			playinglevel.appendChild(birds[i].element);
			x = x+30;
			y = 0;
			birds[i].setpos(x,y);
		}

		monkeysleft = data[myLevel].monkey.length;
		console.log('monkeysleft on start :',monkeysleft);
		for(var i = 0;i<data[myLevel].monkey.length;i++){
			monkeys[i] = new Monkey;
			monkeys[i].element.setAttribute("class","box monkey");
			playinglevel.appendChild(monkeys[i].element);
			monkeys[i].setpos(data[myLevel].monkey[i].x,data[myLevel].monkey[i].y);
		}


		for(var i=0;i<data[myLevel].box.length;i++){
			bricks[i] = new Box;
			bricks[i].element.setAttribute("class","brick wood");
			bricks[i].createbox(data[myLevel].box[i].w,data[myLevel].box[i].h);
			playinglevel.appendChild(bricks[i].element);
			bricks[i].setpos(data[myLevel].box[i].x,data[myLevel].box[i].y);
			console.log('drawing elmeents for level :',myLevel);
		}

		drawScoreBoard();
	}

	function mouseUp(e){
		e.preventDefault();
		finalX = e.clientX;
    	finalY = groundlevel - e.clientY;
    	console.log('finalX :',finalX);
    	console.log('finalY :',finalY);
    	console.log('mouseup');
    	window.removeEventListener('mouseup',mouseUp,false);
   		window.removeEventListener('mousemove', divMove, true);
    	that.launchbird();
    	console.log('from mouse up');
	}

	function mouseDown(e){
		e.preventDefault();
		initialX = e.clientX;
    	initialY = groundlevel - e.clientY;
    	console.log('initialX : ',initialX);
    	console.log('initialY : ',initialY);
  		window.addEventListener('mousemove', divMove, true); 
    	console.log('mousedown');
    	window.addEventListener('mouseup', mouseUp, false);
    	activebirdid.removeEventListener('mousedown',mouseDown,false);
    	
	}


	function divMove(e){
		e.preventDefault();
		if(e.clientX<initialX && e.clientY >(groundlevel - initialY)){
			birds[myactivebird].setpos((e.clientX-25),(groundlevel-e.clientY+25));
		}
	}

	this.startGame = function(){
		var activebird = 0;
		that.loadBird(activebird);
		console.log('again in start Game');
//		that.launchbird(activebird);
	}

	this.loadBird = function(activebird){
		myactivebird = activebird;
		activebirdid = document.getElementById('bird'+myactivebird);
		birds[myactivebird].setpos(initialX,initialY);
		activebirdid.addEventListener('mousedown', mouseDown, false);
	}

	function loadAnotherBird(){
		var activebird;
//		playinglevel.removeChild(birds[myactivebird].element);
		birds[myactivebird].element.style.visibility = 'hidden';
		activebird = myactivebird+1;
		console.log('loading another bird');
		console.log('active bird   :',activebird);
		console.log('total birds  :',birds.length-1);
		initialX = 200;
		initialY = 100;
		finalX = 0;
		finalY = 0;
		
		if(monkeys.length == 0){
	// 1 for level ended successfully , 0 for level failed.
	//delay for animating the scores and removing the elements
			showAdditionalScore();
			setTimeout(function(){
				showOptions(1);
			}, 3000);  		
		}
		if(activebird < birdsleft){
			that.loadBird(activebird);	
		}
		else{
			setTimeout(function(){
				showOptions(0);
			}, 2000);
		}
		
	}

	this.checkCollision = function(mybirds){
		var collided = false;
		for(var i=0;i<bricks.length;i++){
			collided = mybirds.brickCollide(bricks[i]);
			if(collided == true){
				breakBrick(bricks[i]);
//				bricks[i].element.style.visibility = 'hidden';
				collided = false;
			}
		}

		for(var i = 0;i<monkeys.length;i++){
			collided = mybirds.monkeyCollide(monkeys[i]);
			if(collided == true){
				monkeys[i].element.style.visibility = 'hidden';
				collided = false;
				monkeyhit = true;
			}

			if(monkeyhit ==true){
					playinglevel.removeChild(monkeys[i].element);
					monkeys.splice(i,1);
					updateScore('fromMonkeyHit');
					monkeysleft--;
					monkeyhit = false;
					console.log('removing monkey from the game');
			}
		}
			
	}


this.launchbird = function(){
    	var angle = 0;
   		var velocity = 0;
    	var totaldistance = 0;
    	var totaltime = 0;
    	var xpos=0,ypos=0;
    	var y = 0;
    	var vx=0,vy=0;
    	var time = 0;
    	var initialposX = 0;
    	var initialposY = 0;
    	var degrees = 0;

    	angle = Math.atan((initialY-finalY)/(initialX-finalX));
    	velocity = Math.sqrt(Math.pow((finalY-initialY),2)+Math.pow((initialX-finalX),2));
    	totaldistance = Math.pow(velocity,2)*Math.sin(2*angle)/gravity;
    	totaltime = Math.sqrt(2)*velocity/gravity;

    	var intervalid = setInterval(function(){
    	time+=0.04;
    	xpos = initialposX + velocity*time*Math.cos(angle);
    	ypos = initialposY + velocity*time*Math.sin(angle)-gravity*Math.pow(time,2)/2;
    	if(velocity > 99){
        	velocity = 99.0;
    	}
    	that.checkCollision(birds[myactivebird]);
    	birds[myactivebird].setpos(xpos+195,ypos+100);
    	
    	if(ypos+65<0){
			if(velocity<1){
            	console.log('velocity is 0');
            	clearInterval(intervalid);
            	var timeoutid  = setTimeout(function(){
				loadAnotherBird();
				clearTimeout(timeoutid);
				},4000);    
        	}
        	else{
            	velocity = velocity/1.5;
            	angle = Math.PI/4-angle;
            	time = 0;
            	initialposX = xpos;
            	initialposY = -65;
//            	birds[myactivebird].element.style.webkitTransform = "rotate(-90deg)";
//            	console.log('birds rotated');
        	}
			
    	}
   		},10);
	}

	function showOptions(gameStatus){
		removeElements();
		if(gameStatus == 1){
			// level ended successfully. go to next level options
			gotoNewLevel();
		}

		if(gameStatus == 0){
			//level failed retry options
			retryCurrentLevel();
		}
	}
	
	function gotoNewLevel(){
		console.log('starting new level');
// dialog box for level ended

		showDiv(4);
//		document.getElementById("mybtn").style.visibility = 'visible';
		
	}

	function retryCurrentLevel(){
		console.log('retrying current level');
//dialog box for level failed		
//		document.getElementById('levelFail').style.visibility = 'visible';
//		document.getElementById("mybtn").style.visibility = 'visible';
		showDiv(3);
	}

	function drawScoreBoard(){
		scoreBoard = document.createElement('div');
		scoreBoard.setAttribute('class', 'scoreBoard');
		playinglevel.appendChild(scoreBoard);
		scoreBoard.innerHTML =' SCORE  : '+score;
	}



	function updateScore(status){
		step = 50;
		var initial = score;
		var increment = 0;
		if(status == 'fromMonkeyHit'){
			var myinterval = setInterval(function(){
			score+=step;
			scoreBoard.innerHTML = ' SCORE  : '+score;
			if(score >= (data[myLevel].monkey.length - monkeys.length)*10000){
				clearInterval(myinterval);
			}
		}, 5);
		}
		else if(status =='fromRemainingBirds'){
			for(var i=myactivebird+1;i<birds.length;i++){
					increment+=10000+i*500;
			}
			increment+=score;
			var myinterval = setInterval(function(){
				score+=step;
				scoreBoard.innerHTML = ' SCORE  : '+score;
				if(score>=increment){
					clearInterval(myinterval);
				}
			}, 5);
		}
	}




	function showAdditionalScore(){
		console.log('active bird   :',myactivebird);
		console.log('total birds  :',birds.length);
		
		for(var i=myactivebird+1;i<birds.length;i++){
			
			addscore[i] = new addScore();
			addscore[i].element.setAttribute('class', 'score');
			playinglevel.appendChild(addscore[i].element);
			addscore[i].element.style.left =birds[i].x+50+'px';
			addscore[i].element.style.top = birds[i].y-10*i+'px';
			addscore[i].element.innerHTML = 10000+i*500;
			addscore[i].element.style.opacity = "0.0";
			addscore[i].appear();
		}
		updateScore('fromRemainingBirds');
	}

	function breakBrick(myBrick){
		console.log(myBrick.x);
		myBrick.element.style.transform = 'rotate(90deg)';
		myBrick.element.style.transition = 'all 2s';
		myBrick.element.style.left = (myBrick.x+myBrick.w/2)+'px';
		myBrick.element.style.top = (groundlevel-myBrick.h)+'px';
		myBrick.element.style.opacity = '0';
/*		document.getElementById('myBrick').style.transition = 'all 2s';
		document.getElementById('myBrick').style.transform = 'rotate(270deg)';
		document.getElementById('myBrick').style.left = 40+'px';
		document.getElementById('myBrick').style.top = (groundlevel - myBrick.y)+'px';
*/	//	myBrick.element.style.visibility = 'hidden';
	}

	function removeElements(){
		console.log('removing elements from the screen');
		for(var i = 0;i<monkeys.length;i++){
			playinglevel.removeChild(monkeys[i].element);
		}
		
			
		for(var i=0;i<bricks.length;i++){
			playinglevel.removeChild(bricks[i].element);
		}
		

		for(var i=0;i<birds.length;i++){
			playinglevel.removeChild(birds[i].element);
		}

		playinglevel.removeChild(scoreBoard);

		for(var i=0;i<addscore.length;i++){
//			playinglevel.removeChild(addscore[i].element);
		}
		console.log('all elements cleared. moving to next level');
	}
}