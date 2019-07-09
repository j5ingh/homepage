let letter = "w"
let prisma

function preload() {
  prisma = loadFont('assets/Prisma.ttf')
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight)
	cnv.style('z-index', '-1');
}

function draw() {
  background(25)
  for(i = 0; i < 500; i++){
    drawStar()
  }

  drawLetter()

  noLoop()
}

function drawStar() {
  noStroke()
  fill(random(50,150))
  h = random(0, width)
  w = random(0, height)
  s = random(1, 5)
  ellipse(h, w, s, s)
}

function drawLetter() {
  textFont(prisma)
  textAlign(CENTER, CENTER)
  textSize(350)

  fill(207, 141, 73)
  text(letter, width/2, height/2)
  fill('rgba(255, 255, 255, 0.75)')
  text(letter, width/2+2, height/2+2)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
