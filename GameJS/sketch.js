var scl = 20;
var n = 40;
var ball = [];
var g = 30; //gravity
var gy = g;
var gx = 0;
var per = 0.9;
var tile = 0.0001;

var frameCount = 0;

function setup() {
	createCanvas(600, 600);
	frameRate(20/tile);
	
	for (var i = 0; i < n; i++) ball[i] = new Ball();
	
}

function draw() {
	
	update();
	++frameCount;

	if (frameCount >= 1) {
		noStroke();
		background(0, 0, 0, mouseX*256/width);
		fill(200, 0, 255, mouseX*256/width);
		for (var i = 0; i < n; i++) {
			ball[i].show();
		}
		frameCount = 0;
		stroke(200);
		ellipse(mouseX, mouseY, 20, 20);
	}
}

function bounce(A, B) {
	var d = Math.sqrt((A.x-B.x)*(A.x-B.x) + (A.y-B.y)*(A.y-B.y));
	var dAspeed = Math.sqrt(A.xspeed*A.xspeed + A.yspeed*A.yspeed);
	var dBspeed = Math.sqrt(B.xspeed*B.xspeed + B.yspeed*B.yspeed);
	if (d <= scl) {
		var dscl = (scl-d);
		var dx = ((A.x - B.x)/d);
		var dy = ((A.y - B.y)/d);
		A.x = A.x + dx*dscl;
		A.y = A.y + dy*dscl;
		B.x = B.x - dx*dscl;
		B.y = B.y - dy*dscl;

		A.xspeed *= per;
		A.yspeed *= per;
		B.xspeed *= per;
		B.yspeed *= per;

		A.xspeed += dx*(dBspeed+dscl)/2;
		A.yspeed += dy*(dBspeed+dscl)/2;
		B.xspeed -= dx*(dAspeed+dscl)/2;
		B.yspeed -= dy*(dAspeed+dscl)/2;
	}
}

function update() {
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++)
		if (i !== j) {
			bounce(ball[i], ball[j]);
		}
	}
	for (var i = 0; i < n; i++) {
		ball[i].update();
		ball[i].bounce();
	}
	//changeGdir();
}

function changeGdir() {
	gx = (mouseX-width/2);
	gy = (mouseY-height/2);
	var gp = Math.sqrt(gx*gx + gy*gy);
	gx = gx/gp*g;
	gy = gy/gp*g
}
/*
function keyPressed() {
	if (keyCode === UP_ARROW) {
		changeGdir(0, -g);
	}
	else if (keyCode === DOWN_ARROW) {
		changeGdir(0, g)
	}
	else if (keyCode === LEFT_ARROW) {
		changeGdir(-g, 0);
	}
	else if (keyCode === RIGHT_ARROW) {
		changeGdir(g, 0);
	}
}*/
