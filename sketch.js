//creating car and wall variable.
var car;
var wall;

//creating speed and weight variable.
var speed;
var weight;

function setup(){
//creating canvas.
  createCanvas(1300,400);

//giving random value for speed.
  speed = random(22,25);
//giving random value for weight.
  weight = random(400,1500);

//creating sprite for car.
  car = createSprite(50,200,50,50);
//giving velocity for car.
  car.velocityX = speed;

//creating sprite for wall and adding color.
  wall = createSprite(1200,200,60,height/2);
  wall.shapeColor = (80,80,80);
}
function draw(){
  background("black");
  
if(wall.x-car.x < car.width+wall.width/2)
{
  car.velocityX=0;
  var deformation = 0.5 * weight * speed * speed/22509;
if(deformation>180)
{
  car.shapeColor=color(225,0,0);
}

if(deformation<180 && deformation>100)
{
  car.shapeColor=color(230,230,0);
}

if(deformation<100)
{
  car.shapeColor=color(0,225,0);
}
}
  
  drawSprites();
}