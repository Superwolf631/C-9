var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(100,100,60,60);
}

function draw() 
{
  background("darkblue");

  if(keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 5;
  }
if(keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x  -5;
}


  drawSprites()
}




