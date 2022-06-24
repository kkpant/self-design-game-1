var player, line, line1, line2;
var playerImage, backgroundImage;



function preload(){

playerImage = loadImage("images.png");
backgroundImage = loadImage("bck1.png");

}

function setup(){

  createCanvas (500,500);

 // player

 player = createSprite(50,200);
 player.addImage(playerImage); 
 player.scale =0.3;


 /*line = createSprite(250,5,500,50)
 line.color ="red";

 line1 = createSprite(120,250,5,500)
 line1.color ="red";

 line2 = createSprite(250,495,500,50)*/
 
 
 
}

function draw(){

 background(backgroundImage);

  
  //moving player

   if (keyDown("up")){
    console.log(player.y);
    player.y = player.y - 10;
     
   }

   if (keyDown("down")){
    console.log(player.y);
    player.y = player.y + 10;

   }

   if(player.y === 60){
    player.y = 250

   }

   if(player.y === 440){
    player.y = 250

   }

 drawSprites();

}