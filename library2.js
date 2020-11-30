function bounceOff(fixrect,movingrect){
    if( fixrect.x-movingrect.x<=movingrect.width/2+fixrect.width/2 && 
        movingrect.x - fixrect.x<=movingrect.width/2+fixrect.width/2 ){

      fixrect.velocityX=fixrect.velocityX * (-1);
      movingrect.velocityX=movingrect.velocityX * (-1);

        }

        else if(fixrect.y-movingrect.y<=movingrect.height/2+fixrect.height/2 && 
            movingrect.y - fixrect.y<=movingrect.height/2+fixrect.height/2){
        
                fixrect.velocityY=fixrect.velocityY * (-1);
                movingrect.velocityY=movingrect.velocityY * (-1);

        }
}