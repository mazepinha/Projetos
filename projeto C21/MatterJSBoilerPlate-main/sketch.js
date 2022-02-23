
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ground2,ground3,ground4,ground5,ground6;
var ball;
let engine;
let world;


function preload()
{
	
};

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={restitution:0.3,friction:0.1,density:1.2,isStatic:false};
	ball=Bodies.circle(30,60,20,ball_options);
	World.add (world,ball);
	ground1= new ground(width/2,670,width*2,20);
	ground2= new ground(780,10,width*2,20);
	ground3= new ground(790,350,20,height-40);
	ground4= new ground(10,350,20,height-40);
	ground5= new ground(450,610,15,100);
	ground6= new ground(650,610,15,100);

	Engine.run(engine);
  
};


function draw() {
  rectMode(CENTER);
  background(0);
  
    
    ground1.show();
    ground2.show();
    ground3.show();
    ground4.show();
    ground5.show();
    ground6.show();

	ellipse (ball.position.x,ball.position.y,20);

  drawSprites();
  if (keyCode=UP_ARROW){
	forcax();
	forcay();
	};
	
	
  function forcax(){
	Matter.Body.applyForce(circle,{x:0,y:0},{x:0.0005,y:0});
  };
  
  function forcay(){
	Matter.Body.applyForce(circle,{x:0,y:0},{x:0,y:-0.0005});
  };
};


