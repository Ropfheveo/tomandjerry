 var PLAY = 1;
 var END = 0;
 var gameState = PLAY; 
 
 var cat , catImage , cat_run , cat_runImage , cat_end , cat_endImage;
 var mouse , mouseImage , mouse_move , mouse_moveImage , mouse_end , mouse_endImage;
 var garden , gardenImage;

  function preload() {
   catImage = loadImage("cat1.png");
   cat_runImage = loadImage("cat2.png" , "cat3.png");
   cat_endImage = loadImage("cat4.png");
   mouseImage = loadImage("mouse1.png");
   mouse_moveImage = loadImage("mouse2.png" , "mouse3.png");
   mouse_endImage = loadImage("mouse4.png");
   gardenImage = loadImage("garden.png");
  } 

  function setup(){
    createCanvas(600,600);

    cat= createSprite(40,20,20,20);
    cat.addAnimation(catImage);
    cat.scale=0.08;
    cat.velocityX = 4;
    cat.addAnimation("running", cat_run);
    cat.addAnimation("collided", cat_end);

    mouse = createSprite(40,20,20,20);
    mouse.addAnimation(mouseImage);
    mouse.scale=0.08;
    mouse.addAnimation("running", mouse_run);
    mouse.addAnimation("collided", mouse_end);

    grarden = createSprite(200,200);
    grarden.addAnimation(grardenImage);
    grarden.scale=0.08;

  }

  function draw() {

    
    text(mouseX + ',' + mouseY, 10 , 45);

    if(gameState===PLAY){
        background(0);

        if(garden.y > height ){
           garden.y = height/2;
        }
        if(garden.x > width ){
           garden.x = width/2;
        }

        if(cat_run.isTouching(mouse_move)) {
          gameState = END;
          cat_runImage.changeAnimation(cat_endImage);
          mouse_move.changeAnimation(mouse_end);
        }
    }
  
        if(gameState === END){

          cat_run.addAnimation(cat_end);
          mouse_move.addAnimation(mouse_end);
           
          cat.velocityX = 0;
        }
 }


    drawSprites();
  


  function keyPressed(){
   if(keyCode === LEFT_ARROW); 
      cat.addAnimation = -5;
      cat.addAnimation("cat_run") 
  }
