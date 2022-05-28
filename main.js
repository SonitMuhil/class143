function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSoun("jump.wav");
	mario_coin = loadsound("coin.wav");
	mario.gameover = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	mario_kick = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);  


	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');
	  
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded(){
	console.log("Model Loaded!!");
}

function draw() {
	game()

	background("#D3D3D3");
	if(noseX < 300){
		marioX = marioX - 1;
	}
	if(noseX > 300){
		marioX = marioX + 1;
	}
	if(noseY < 150){
		marioY = marioY - 1;
	}
	Image(img, marioX, marioY, 40, 70);
}

function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}






