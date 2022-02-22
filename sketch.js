var ground,player;
var monster,meteor,monsterImg,meteorImg,meteorGroup,playerLives=3
var monsterLives=5;

var gameState = 0;
var count =0;

var ans;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload(){
  bg1 = loadImage("background.jpg");
  playerImg = loadImage("player.png");
  monsterImg=loadImage("creeper.png")
  meteorImg=loadImage("meteor.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  ground = createSprite(width/2, height/2, width+100, height);
  ground.addImage(bg1);
  ground.scale =2.5;
  ground.velocityX = -2;

  ground2 = createSprite(width/2, height-20, width+100, 20);  

  player = createSprite(200, height-170);
  player.addImage(playerImg);
  player.scale = 0.5;
  player.velocityX=5

meteorGroup= new Group()



monster=createSprite(-50,height-170)
monster.addImage(monsterImg)
monster.scale=0.8
monster.velocityX=5

ques = new Question();

}

function draw() {
  //background("red"); 

if(gameState === 0){

  if(keyDown(RIGHT_ARROW)){
    player.velocityX+=2
    
    }

  if(ground.x <width/2 - 150){
        ground.x = width/2;
  }
    
      player.collide(ground2);
  //player control
  if(keyDown("space")){
    player.velocityY = -12;
  } 

//gravity
  player.velocityY += 0.5;

if(monster.isTouching(player)) {
playerLives-=1;

}

player.overlap(meteorGroup, function(collector, collected){

  playerLives -=1;

  collected.remove();
})


monster.collide(meteorGroup, function(collector, collected){
  playerLives -=1;

  collected.remove();

  count +=1;
})


//if(playerLives===0) {
//stop()


//}


  spawnMeteors();

  drawSprites();




  textSize(50)
  fill("black")
  text("Lives:"+playerLives,width-200,100)
  
  text("Meteor touched the monster: "+ count + " times",20,100);

  if(count === 1){
    gameState =1;
  }
}

    if(gameState ===1){
      background("beige");

      ques.display();

      if(ans){
        console.log("Answer is Correct"); 
      }
      else{
        console.log("Wrong Answer");
      }
    }
}
function spawnMeteors() {
  if(frameCount%100===0) {
  meteor=createSprite(random(10,width-100),0,50,50)
  meteor.velocityY=10
  meteor.addImage(meteorImg)
  meteor.scale=0.5
  meteorGroup.add(meteor)
  
  
  }
  
  
  
  }
 function gameOver()
   { swal({
     title: `Game Over`, text: "Oops you lost the race....!!!",
  
  imageUrl: "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
   imageSize: "100x100", confirmButtonText: "Thanks For Playing"
   }); }


   function stop() {
meteorGroup.destroyEach()
//player.remove()
monster.remove()


   }
   