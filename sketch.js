let prisma

function preload() {
  prisma = loadFont('assets/Prisma.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  textFont(prisma)
  textAlign(CENTER, CENTER)
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
  textSize(350)
  fill(256)
  text('L', width/2, height/2)

}
