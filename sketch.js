
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var dustbin1,dustbin2,dustbin3;
var ball;
var dustbin;
var slingshot;


function preload()
{
	dustbin = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(750,height,1500,20);
  
  

	

    ball = new Ball(200,200,150,150);
    slingshot = new SlingShot(ball.body,{x:100, y:200});

	
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  Engine.update(engine)

  image(dustbin,850,400,300,300);
  ground.display();
 
  ball.display();

  slingshot.display();

  

  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

