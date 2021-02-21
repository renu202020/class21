var box1, movebox2, box3, box4;


function setup() {
  createCanvas(800,400);
 box1= createSprite(400, 200, 50, 50);
 movebox2= createSprite(200,200,50,50);
 
 box1.shapeColor="blue";
 movebox2.shapeColor="blue";
 
 box3= createSprite(200,300,30,30);
 box3.velocityX=-5;
 box4= createSprite(100,300,30,30);
 box4.velocityX=5;


 

}

function draw() {
  background(255,255,255);

  movebox2.x=mouseX;
  movebox2.y=mouseY;
  console.log(movebox2.x-box1.x);
   bounceOff(box3,box4);

  if(isTouching(box1, movebox2))
  {
    box1.shapeColor="red";
    movebox2.shapeColor="red";
  }
  else
  {
    box1.shapeColor="blue";
    movebox2.shapeColor="blue";
  }

  
  drawSprites();
}

