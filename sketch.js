var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;
function preload(){
  
  
  monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  ground=createSprite(200,300,600,30);
  ground.velocityX=-3;
  monkey=createSprite(100,230,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.2;
}


function draw() {
createCanvas(600,400);
  background("white");
  textSize(20);
  stroke("black");
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,300,50);
  if (ground.x < 600) {
      ground.x = 300;
    }
  monkey.collide(ground);
  if (keyDown("space")){
    monkey.velocityY=-12;
  }
  //gravity
monkey.velocityY=monkey.velocityY+0.8;
 spawnRocks();
  spawnBanana();
  drawSprites();
}
function spawnRocks(){
  if (frameCount%180===0){
  obstacle=createSprite(599,247,20,20)
    obstacle.addImage("rock",obstaceImage);
    obstacle.scale=0.2;
 obstacle.velocityX=-7;
    obstacle.lifetime=620;
  }
}
function spawnBanana(){
  if(frameCount%100===0){
  banana=createSprite(599,Math.round(random(110,190)),20,20);
  banana.addImage(bananaImage);
    banana.scale=0.2;
  banana.velocityX=-3;
  banana.lifetime=620;
  }
}
  






