let letter = "w"
let prisma
let months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "July", "August", "September", "Oktober", "November", "Dezember"]

function preload() {
  prisma = loadFont('assets/Prisma.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(25)
  for(i = 0; i < 500; i++){
    drawStar()
  }

  drawIntroduction()
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

function drawIntroduction() {
  textAlign(CENTER, TOP)
  fill('rgba(255, 255, 255, 0.50)')
  textSize(20)
  let d = new Date();
  month = months[d.getMonth()]
  text(`das ~ASCII-Zeichen des Monats~ ${month} lautet`, width/2, 0)
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
