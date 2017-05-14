function Ball() {
	this.x = floor(scl*random(width/scl));
	this.y = floor(scl*random(height/scl));
	this.xspeed = floor(random(15)-7);
	this.yspeed = floor(random(15)-7);

	this.update = function() {
		this.yspeed += gy;
		this.xspeed += gx;
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