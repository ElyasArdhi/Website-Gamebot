function Game(){
//	console.log('Game created');
	var Scene;
	var level;
	this.initGame = function(currentLevel){
		Scene = new scene;
		level = currentLevel;

		Scene.drawscene(level);

	console.log(currentLevel);
	}

	this.playGame = function(){
		var mine = Scene.startGame();
	//	return mine;
	}	

	this.playmusic = function(){
    	var myaudio = new Audio("../bgmusic.mp3");
    	myaudio.play();
    }

}