var astronaut, bg,sleep,brush,eat,gym,bath,move

function preload(){
  bg=loadImage("images/iss.png")
  sleep=loadAnimation("images/sleep.png")
  brush=loadAnimation("images/brush.png")
  eat=loadAnimation("images/eat1.png","images/eat2.png")
  gym=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
  bath=loadAnimation("images/bath1.png","images/bath2.png")
  move=loadAnimation("images/move.png","images/move1.png")
}

function setup() {
  createCanvas(400, 400);
  astronaut=createSprite(300,230)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale=0.1
}

function draw() {
background(bg);
stroke("red")
text("instructions",20,25)
text("upArrow=brushing",20,50)
text("downArrow=gyming",20,75)
text("leftArrow=eating",20,100)
text("rightArrow=bathing",20,125)

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush)
  astronaut.changeAnimation("brushing")
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gyming",gym)
  astronaut.changeAnimation("gyming")
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat)
  astronaut.changeAnimation("eating")
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath)
  astronaut.changeAnimation("bathing")
}

  drawSprites()
}