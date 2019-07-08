// copied from https://codepen.io/shtrom/pen/NpxJWy

var cnv;

var acceleration = 0.0098;
var nDrops = 1000;
var drops = [];

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);
	cnv.style('z-index', '-1');

	console.log("test");
  for (i = 0; i < nDrops; i++) {
    drops.push(new Drop());
  }
}

function draw() {
  clear();
  drops.forEach(function(d) {
    d.drawAndDrop();
  });
}

function Drop() {
  this.initX = function() {
    this.x = random() * width;
  };
  this.initY = function() {
    this.y = -random() * height / 3; // Initialise rain somewhat off the screen
  };

  this.initX();
  this.y = random() * height;

  this.length = random() * 10;
  this.speed = random();

  this.drawAndDrop = function() {
    this.draw();
    this.drop();
  };

  this.draw = function() {
		stroke('#FFFFFF')
    line(this.x, this.y, this.x, this.y + this.length);
  };

  this.drop = function() {
    if (this.y < height) {
      this.y += this.speed;
      this.speed += acceleration;
    } else {
      this.speed = random();
      this.initY();
      this.initX();
    }
  };
}
