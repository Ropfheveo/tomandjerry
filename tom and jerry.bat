 var cat ,  catImg , catrun , catrunImg , catend , catendImg , mouse , mouseImg , mousemoving , mousemovingImage ,
 mouseend , mouseendImge , garden , gardenImg;

 var PLAY = 1;
 var END = 0;
 var gameState = PLAY;

function prelaod(){
    catrunImg = laodImage("cat2" , "cat3");
    mousestartImg = laodImage("mouse1");
    maouseImg = laodImage("mouse2" ' "mouse3");
    mouseendImg = loadImage("maouse4");
    catImg = laodImage("cat1");
    catendImg = loadImage("mouse4");
    gardenImg = loadImage("garden");

}
 functoin setup(){
   createCanvas(600,600);
    garden = createSprite(300,300);
    garden.addImage("garden",gardenImg);
  
  cat = createSprite(400.200,50,50);
  cat.addImage
 }

 function draw(){
     background(0);

       
   if(gameState===PLAY){
     if(cat.isTouching(mouse)) {
        gameState=END;
        }
        
        if(keyCode === LEFT_ARROW){
          cat.velocityX = -5;
          cat.addAnimation("catrun" , catrunImg);
          cat.chamgeAnimatoin("catrun"); 
        }
     else{
       if(gameState === END){

         if (cat.x - mouse.x < (cat.width - maouse.width)/2){
          
        }
        cat.changeAnimation("catend" , catendImg);
        mouse.changeAnimation(mouseendImg);

          }
        }
