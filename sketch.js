
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground = new Ground(800,590,1800,20);

box1 = new Box(900,570,270,20);
box2 = new Box(1030,530,20,100);
box3 = new Box(760,530,20,100);

ball = new Ball(200,450,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

ground.display();

box1.display();
box2.display();
box3.display();

ball.display();

  drawSprites();
 
}



function KeyPressed(){

if(keyCode===UP_ARROW){

Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})



}



}