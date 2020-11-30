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