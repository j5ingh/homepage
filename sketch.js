function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(25)
  for(i = 0; i < 500; i++){
    drawStar()
  }
  noLoop()
}

function drawStar(value){
  noStroke()
  fill(random(50,150))
  h = random(0, width)
  w = random(0, height)
  s = random(1, 5)
  ellipse(h, w, s, s)
}
