
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var ground


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400)  

  

  
monkey = createSprite(40,330,10,10,) 
monkey.addAnimation("monkey", monkey_running)
monkey.scale = 0.1

ground = createSprite(200,350,1200,10)
ground.velocityX = -4

foodGroup = new Group
obstacleGroup = new Group
}


function draw() {
background(220)
 
score = score + Math.round(getFrameRate()/60);
  
  monkey.collide(ground)
  monkey.velocityY = 1
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
   
  if(keyDown("space")) { 
        monkey.velocityY = -20
       
    }
  food();
 obstacles();
  
drawSprites();

text("Score: " + score, 500,50);


}

function food() {
 if (frameCount % 80 === 0) {
   banana = createSprite(600,1)
  banana.y = Math.round(random(120,200)) 
 banana.addImage("banana", bananaImage)
 banana.velocityX = -4
banana.lifetime = 200
 banana.scale = 0.1
foodGroup.add(banana)

 }
}

function obstacles(){
  if(frameCount % 300 === 0) {
obstacle = createSprite(600,329)   
obstacle.addImage("rock", obstacleImage)  
obstacle.scale = 0.1
obstacle.velocityX = -4
obstacle.lifetime = 200 
obstacleGroup.add(obstacle) 
  }
}