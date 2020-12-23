var  score = 0;
function preload()
{
roadimg = loadImage("images/road.png");
car1    = loadImage("images/car1.png");
coin1 = loadImage("images/coin.gif");
coinsound = loadSound("images/coinsound.wav")
}

function setup() {
  createCanvas(800, 600);
  //road = createSprite(400,550);
  //road.addImage(roadimg);
   car = createSprite(400,550);
   car.addImage(car1);
   car.scale = 0.2
   //coin = createSprite()
   coinGroup = new Group();
}

function draw() {  
background(roadimg);
background.velocityY =  5
Coins();
camera.position.x = 400;
camera.position.y = car.y;
/*if(keyDown(UP_ARROW)){
  car.y -=6;
}
if(keyDown(DOWN_ARROW)){
  car.y +=6;
}*/
if(keyDown(RIGHT_ARROW)){
  car.x +=6;
}
if(keyDown(LEFT_ARROW)){
  car.x -=6;
}
if(car.isTouching(coinGroup)){
  coinGroup.destroyEach();
  score++
  coinsound.play();
}
drawSprites();
textSize(35);
stroke("yellow"); 
fill("black"); 
text("SCORE : "+score,336,280);
}
function Coins(){
  if(frameCount % 90 === 0){
    coin = createSprite(390,150,20,20);
    coin.y = Math.round(random(50,100));
    coin.x = Math.round(random(250,600));
    coin.addImage(coin1);
    coin.scale = 0.1;
    coin.velocityY = 3;
    coinGroup.add(coin);
  }
}