function Ball() {
	this.x = floor(scl*random(width/scl));
	this.y = floor(scl*random(height/scl));
	this.xspeed = floor(random(15)-7)*scl;
	this.yspeed = floor(random(15)-7);
	this.gx = 0;
	this.gy = 0;

	this.update = function() {
		this.gx = mouseX-this.x;
		this.gy = mouseY-this.y;
		var gt = Math.sqrt(this.gx*this.gx+this.gy*this.gy);

		this.xspeed += this.gx*g/gt;
		this.yspeed += this.gy*g/gt;
		this.x += this.xspeed*scl*tile;
		this.y += this.yspeed*scl*tile;

		this.x = constrain(this.x, scl, width-scl);
    	this.y = constrain(this.y, scl, height-scl);
	}
	this.show = function() {
		arc(this.x, this.y, scl, scl, 0, 2*PI);
	}

	this.bounce = function() {
		if (this.y+scl >= height || this.y-scl <= 0) {
			this.yspeed = -this.yspeed*per;
		}
		if (this.x-scl <= 0) {
			this.xspeed = -this.xspeed*per;
		}
		if (this.x+scl >= width) {
			this.xspeed = -this.xspeed*per;
		}
	}
}