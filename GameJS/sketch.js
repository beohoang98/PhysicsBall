var scl = 15;
var n = 35;
var ball = [];
var g = 0.5; //gravity
var gy = g;
var gx = 0;
var giatoc = 0.1;
var per = 0.9;
var tile = 0.04;

function setup() {
	createCanvas(600, 400);
	frameRate(20/tile);

	for (var i = 0; i < n; i++) ball[i] = new Ball();
}

function draw() {
	background(50);
	fill(200, 0, 255);
	
	update();
	for (var i = 0; i < n; i++) {
		ball[i].show();
	}
}

function bounce(A, B) {
	var d = Math.sqrt((A.x-B.x)*(A.x-B.x) + (A.y-B.y)*(A.y-B.y));
	var dspeed = Math.sqrt(Math.pow(A.xspeed-B.xspeed, 2) + Math.pow(A.yspeed-B.yspeed, 2));
	var k = d/scl;
	if (k <= 1) {
		/*var dx = d*Math.cos((A.x - B.x)/d);
		var dy = d*Math.sin((A.y - B.y)/d);
		A.x = A.x - dx;
		A.y = A.y - dy;
		B.x = B.x + dx;
		B.y = B.y + dy;*/

		dx = (A.xspeed-B.xspeed);
		dy = (A.yspeed-B.yspeed);
		A.xspeed -= dx;
		A.yspeed -= dy;
		B.xspeed += dx;
		B.yspeed += dy;
	}
}

function update() {
	for (var i = 0; i < n-1; i++) {
		for (var j = i+1; j < n; j++) {
			bounce(ball[i], ball[j]);
		}
	}
	for (var i = 0; i < n; i++) {
		ball[i].update();
		ball[i].bounce();
	}
}

function changeGdir(GofX, GofY) {
	gx = GofX;
	gy = GofY;
}

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
}
