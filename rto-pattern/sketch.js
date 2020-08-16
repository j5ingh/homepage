let prisma
let stars = []
let count = 0
let speed = 4

function preload() {
	prisma = loadFont("assets/SkyhookMono.ttf")
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
	angleMode(DEGREES)

	for(i = 0; i < 1500; i++){
		stars[i] = {
			"x" : random(-width, width),
			"y" : random(-height, height),
			"z" : random(-width, width),
			"s" : random(height/300, height/250),
			"c" : random(50,150),
		}
	}

	drawBackground()
	drawScene()
	/*drawLetter()
	line(-width,0,width,0)
	line(0,-height,0,height)*/
}

function draw() {
	if(mouseIsPressed) {
		count++
		rotateX(count / 10 * speed)
		rotateY(count / 11 * speed)
		rotateZ(count / 12 * speed)
		drawBackground()
		drawScene()
	}
}

function drawBackground() {
	background(25)
	for(i = 0; i < stars.length; i++){
		drawStar(i)
	}
}

function drawStar(i){
  //noStroke()
	s = stars[i]
  //fill(s.c)
	stroke(s.c)
	strokeWeight(s.s)
  //ellipse(s.x, s.y, s.s, s.s)
	point(s.x, s.y, s.z)
}

function drawLetter(){
	textFont(prisma)
	textSize(150);
  textAlign(CENTER,CENTER);
	fill("rgba(255, 255, 255, 0.75)")
  text('o', 0, 0)
}

function drawEllipse(r, c , s) {
	stroke(c)
	strokeWeight(s)
	noFill()
	ellipse(0, 0, r, 0.375 * r)
}

function drawBlume(r, n, c, s) {
	for(i = 0; i < n; i++) {
		drawEllipse(r, c, s)
		rotate(360/n)
	}
}

function drawScene() {
	//translate(width/2,height/2)

	n = 32
	r = width/2
	drawBlume(r, n, "rgba(204, 0, 255, 0.45)", 1)
	rotate(0.5)
	drawBlume(r, n, "rgba(255, 255, 255, 0.5)", 2)
}
