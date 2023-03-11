var person,player
var obstaclesGroup,o1,o2



function preload(){
 bg = loadImage("bg2.jpg");
 person = loadAnimation("player 1.png","player3.png","player2.png");
 o1 = loadImage("o1.png")
 o2 = loadImage("o2.png")
 
  
}

function setup() {
  

  createCanvas(1200,560)
  player = createSprite(50,350,20,20)
  player.addAnimation("player",person);
  player.scale = 0.7;
 
  player.velocityX = 10 

  // obstacles= new obstaclesGroup();

  

}

function draw() {
  //set background color
  background(bg)
   spawnObstacles();
 
  
  drawSprites();
}



function spawnObstacles(){
   if(frameCount % 60 === 0){
    var obstacle = createSprite(1050,430,10,40);
         obstacle.velocityX = -6;
         obstacle.scale = 0.3
 
    
    // generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstacle.addImage(o1);
               break;
       case 2: obstacle.addImage(o2);
               break;

   }
     }
    
  
    }
  









