function setup() {
  createCanvas(800,400);
  
  fixrect = createSprite(400, 200, 50, 50);
  fixrect.shapeColor="red";
  movingrect = createSprite(500,200,50,50);
  movingrect.shapeColor="red";

  rect3=createSprite(50,350);
  rect3.shapeColor="white";
  rect3.velocityX=3;

  rect4=createSprite(750,350);
  rect4.shapeColor="yellow";
  rect4.velocityX=-3;

  rect1=createSprite(700,50,40,40);
  rect2=createSprite(300,90,40,40);

}

function draw() {

  background("black");  

movingrect.x=World.mouseX;
movingrect.y=World.mouseY;

bounceOff(rect3,rect4);

    if(isTouching(rect2,movingrect)){
                      
      rect2.shapeColor="green";
      movingrect.shapeColor="green";

    }

    else{
      
      rect2.shapeColor="red";
      movingrect.shapeColor="red";

    }

    if(isTouching(fixrect,movingrect)){
                      
      rect1.shapeColor="green";
      movingrect.shapeColor="green";

    }

    else{
      
      rect1.shapeColor="red";
      movingrect.shapeColor="red";

    }

  drawSprites();

}

function isTouching(fixrect,movingrect){

  if( fixrect.x-movingrect.x<=movingrect.width/2+fixrect.width/2 && 
    movingrect.x - fixrect.x<=movingrect.width/2+fixrect.width/2 &&
    fixrect.y-movingrect.y<=movingrect.height/2+fixrect.height/2 && 
    movingrect.y - fixrect.y<=movingrect.height/2+fixrect.height/2 )
    {
  
   return true;
  
  }
  
  else{
  
   return false;
  
  }

}