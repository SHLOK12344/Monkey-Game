

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;

function preload(){
  
 
   monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey=createSprite(50,315,10,19);
  monkey.addAnimation("d",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(200,350,800,8);
  ground.velocityX=-4;
  
  obstacleGroup=new Group();
  bananasGroup=new Group();
}


function draw() {
background("white");
  
  spawnbananas();
  spawnobstacles();
  
  obstacleGroup.setLifetimeEach(-1);
  
  if(ground.x<0){
    ground.x=300;
  }
  
  if(keyDown("space")&&monkey.y >=300){
    monkey.velocityY=-20;
  }
  
  monkey.velocityY = monkey.velocityY + 0.9;
  monkey.collide(ground);
  
  if(obstacleGroup.isTouching(monkey))
  {
     obstacleGroup.setLifetimeEach(-1);
     bananasGroup.setLifetimeEach(-1);
    obstacleGroup.setVelocityXEach(0);
    bananasGroup.setVelocityXEach(0);
    bananasGroup.visible=false;
  }
  
  if(bananasGroup.isTouching(monkey))
    {
      score=score+1;
      bananasGroup.destroyEach();
    }
  
   drawSprites();
  text("Score :"+score,300,50)
  
  
}

function spawnbananas(){
  if(frameCount%80===0)
  {
  banana=createSprite(390,100,10,19);
  banana.y = Math.round(random(80,200));
  banana.addAnimation("a",bananaImage);
  banana.scale=0.1;
  banana.velocityX=-4;
  bananasGroup.add(banana);
  }
}

function spawnobstacles(){
  if(frameCount%70===0){
  obstacles=createSprite(400,320,15,15);
  obstacles.addImage("b",obstacleImage);
  obstacles.scale=0.14;
  obstacleGroup.add(obstacles);
  obstacleGroup.setVelocityXEach(-6);}
}


