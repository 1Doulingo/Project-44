var bgimg
var shooterIMG
var shooterShooting


function preload(){
bgimg = loadImage("./assets/bg.jpeg")
shooterIMG = loadImage("./assets/shooter_2.png")
shooterShooting = loadImage("./assets/shooter_3.png" )
}


function setup(){
createCanvas(windowWidth,windowHeight)
shooter = createSprite(200,height-100)
shooter.addImage(shooterIMG)
shooter.scale = 0.3
}


function draw(){
background(bgimg)

if (keyDown("UP_ARROW")){
shooter.y = shooter.y-30
}

if (keyDown("DOWN_ARROW")){
  shooter.y = shooter.y+30
  }

  if (keyWentDown("space")){
  shooter.addImage(shooterShooting)
    }

    if (keyWentUp("space")){
      shooter.addImage(shooterIMG)
        }
    
drawSprites()
}