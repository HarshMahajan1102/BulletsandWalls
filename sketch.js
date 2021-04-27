const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var thikness, wall;
var bullet, speed, weight;
var Deformation;



function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 20);
  thikness = random(22,83);
  wall = createSprite(1200, 200, thikness, height/2);
  speed = random(321,223);
  weight = random(30,52);  
  bullet.velocityX = speed;  
  
}

function draw() {
  background(255,255,255);  
  wall.shapeColor = color(80,80,80);
   if (hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var Damage = (0.5*weight*speed*speed)/(thikness*thikness*thikness);

    if (Damage<10) {
      wall.shapeColor = color(0,255,0);
    }
    
    if (Damage>10) {
      wall.shapeColor = color(255,0,0);
    } 
  }
  
   drawSprites();
}

function hasCollided(bullet,wall) {
   bulletRightEdge = bullet.x + (bullet.width/2);
   wallLeftEdge = wall.x - wall.width/2;
   if (bulletRightEdge>=wallLeftEdge){
    return true
   }
   else return false;
  }