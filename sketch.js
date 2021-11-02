
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var grnd1,grnd2,grnd3,grn4,grnd5;
var radius = 20;
var player1,player2;
var p1Score = 0
var p2Score = 0
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
    
	
var ball_options={

isStatic:false,
restitution: 0.3,
friction :0,
density: 1.2,

}

grnd1 = new Ground(width/2,660,width,20);

grnd2 = new Ground (990,590,20,120);
grnd3 = new Ground(1190,590,20,120);

grnd4 = new Ground(10,590,20,120);
grnd5 = new Ground(210,590,20,120);

bordergrndL = new Ground(1,200,2,700);
bordergrndR = new Ground(1199,200,2,700);

ball = Matter.Bodies.circle(600,100,20,ball_options);
World.add(world,ball);

 player1 = createSprite(250,640,40,40);
 player2 = createSprite(950,640,40,40);
	Engine.run(engine);
  player1.scale = 0.7;
  player2.scale = 0.7;
}


function draw() {
  rectMode(CENTER);
  background(0);
  push(); 
  fill("red"); 
  ellipse(ball.position.x,ball.position.y,radius,radius);
   pop();

   textSize(30);
   text("Player 1 Score: "+p1Score,100,100)
   text("Player 2 Score: "+p1Score,900,100)
grnd1.show();
grnd2.show();
grnd3.show();
grnd4.show();
grnd5.show();
bordergrndL.show();
bordergrndR.show();

//Movement

if(player1.x<=240){
  player1.x= 240
}

if(player1.x>=955){
  player1.x= 955
}

if(player2.x<=240){
  player2.x= 240
}

if(player2.x>=955){
  player2.x= 955
}

if(keyDown(RIGHT_ARROW)){
	player1.x +=5;
  }  
  
  if(keyDown(LEFT_ARROW)){
	player1.x -=5;
  }  

  if(keyIsDown(68)){
	player2.x +=5;
  }  
  
  if(keyIsDown(65)){
	player2.x -=5;
  }  
  

	 /*if(collided1(ball,player1)==true){
    
    
    console.log("collided")
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.2,y: -0.2}); 
   }*/
   
   /*if(collided2(ball,player2)==true){

    player2Force();
    console.log("collided")
   }*/

   
   if(ball.position.x <= 210 && ball.position.y<=665){
     p2Score +=1
     reset();
   }

   if(ball.position.x >=990 && ball.position.y<=660){
    p1Score +=1
    reset();
  }

  if(p1Score == 5){
    textSize(50);
    text("Player 1 wins!",500,500)
    ball.visible = false;
    player1.remove();
    player2.remove();
  }

  if(p2Score == 5){
    textSize(50);
    text("Player 2 wins!",500,500)
    ball.visible = false;
    player1.remove();
    player2.remove();
  }
   
  if(keyIsDown(UP_ARROW)&&player1.position.x == ball.position.x){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:0});
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0, y:-100});
    }
  
    if(keyIsDown(DOWN_ARROW)&&player2.position.x == ball.position.x){
      Matter.Body.applyForce(ball,{x:0,y:0},{x:-50,y:0});
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0, y:-100});
      }

    drawSprites();
}

/*function collided1(body,sprite){

   var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(sprite.position.x==body.position.x){
            
            return true;
          }
  
}*/

/*function collided2(body,sprite){

  var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
         if(d ){
           return true;
           
         }
         else{
           return false;
         }
 
}*/



function player1Force(){ 
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.2,y: -0.2}); 
} 
function player2Force(){
   Matter.Body.applyForce(ball,ball.position,{x:0.25,y:0.25}); 
}

function reset(){
  ball.position.x = 600
  ball.position.y = 100

  player1.position.x = 250
  player1.position.y = 640

  player2.position.x = 950
  player2.position.y = 640

}