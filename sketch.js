var bgImg;
var boy,boyImg;
var invisibleGround;

function preload() {
 bgImg = loadImage("snow1.jpg");
 boyImg = loadImage("snowboy.png");

}
function setup() {
  createCanvas(1400,750);
  boy = createSprite(200,600,50,50);
  boy.addImage(boyImg);
  boy.scale = 0.5;
  invisibleGround = createSprite(50,710,4000,10);
  invisibleGround.visible = false;
}

function draw() {
  background(bgImg);
  
  if(keyDown("LEFT_ARROW")){

    boy.x = boy.x - 20
    
  }

  if(keyDown("RIGHT_ARROW")){

    boy.x = boy.x + 20
    
  }

  if(keyDown("SPACE")){

    boy.y = boy.y - 20
    
  }
  if(keyWentUp("SPACE")){
  boy.y = boy.y + 100;
  }

  if(boy.collide(invisibleGround)){
  
    boy.y = 600;

  }
  



  drawSprites();
}