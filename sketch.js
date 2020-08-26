var bullet,wall;
var speed;
var weight,thickness;
function setup() {
  createCanvas(1600,400);
   bullet= createSprite(50,200,50,50);
   bullet.scale = 0.5;
   speed = random(57,130);
   weight = random(35,50);
   
   wall = createSprite(700,200,0,200);
 thickness = random(22,83)
 bullet.velocityX = speed;
}

function draw() {
  background("black");
  if(c(wall,bullet)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      bullet.shapeColor = color(255,0,0);
    }
    if(damage<10){
      bullet.shapeColor = color(0,255,0);
    }
  }  
  drawSprites();
  c ();
}
function c (lbullet,lwall){
bulletRightEdge = lbullet.x+lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true ;

}
 return false;
}