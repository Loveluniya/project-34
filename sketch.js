const Engine = Matter.Engine; 
const Render = Matter.Render; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint; 
const Body = Matter.Body; 
const Composites = Matter.Composites; 
const Composite = Matter.Composite; 
let engine; 
let world; 

var net,netImage;
var netCopy;
var ground;
var ball,ballImg;
var invi;
var score;

function preload(){
  
netImage = loadImage("basketballNet.png");
ballImg = loadImage("basketball.png");

}

function setup() { 
  createCanvas(windowWidth,windowHeight - 4 ); 
  engine = Engine.create(); 
  world = engine.world;

  net = createSprite(1200,450,50,50);
  net.scale = 0.5;
  net.addImage(netImage);
  net.velocityY = -7;

  netCopy = createSprite(1150,410,50,50);
  netCopy.velocityY = -7;
  netCopy.visible = false;

  ground = createSprite(width/2,650,1500,20);

  ball = createSprite(500,500,40,40);
  ball.scale = 0.1;
  ball.addImage(ballImg);

  score = 0;
} 

function draw()  
{ 
  background("white"); 
  Engine.update(engine);  

  if(keyDown(UP_ARROW)){

    ball.velocityY = -4;
    ball.velocityX = 6; 
    ball.velocityY = ball.velocityY + 2;
  }

  if (ball.isTouching(netCopy)) {
    score = score + 1;
  }

  if(ball.x >= 1350){
   ball.x = 500;
   ball.y = 500;
   ball.velocityY = 0;
   ball.velocityX = 0;
  }

  ball.collide(ground);

 if (net.y <= height - 470){
   net.velocityY = 7;
   netCopy.velocityY = 7;
 } 

 if(ball.isTouching(netCopy)){
  ball.x = 500;
  ball.y = 500;
  ball.velocityY = 0;
  ball.velocityX = 0;
 engine.world.gravity.y=-1;
 }

 if (net.y >= height - 200){
  net.velocityY = -7;
  netCopy.velocityY = -7;
}

 textSize(20);
 text("Score: " + score,100,100);
 drawSprites();

}
