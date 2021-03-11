
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.constraint;

var ball1,ball2,ball3,ball4,ball5
var roof,rope1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 var ballOptions={
	 isStatic:true
 }	
 ball1=Bodies.circle(200,600,25,ballOptions)
 ball1.shapeColor=color("pink")
 World.add(world,ball1)
 
 ball2=Bodies.circle(250,600,25,ballOptions)
 World.add(world,ball2)
 ball3=Bodies.circle(300,600,25,ballOptions)
 World.add(world,ball3)

 ball4=Bodies.circle(350,600,25,ballOptions)
 World.add(world,ball4)
 
 ball5=Bodies.circle(400,600,25,ballOptions)
 World.add(world,ball5)

 roof=Bodies.rectangle(300,300,300,20,ballOptions)
 World.add(world,roof)
	//Create the Bodies Here.

  rope1=new rope(ball1.body,roof.body,-ballDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS);
  ellipse(ball1.position.x,ball1.position.y,25,25)
  ellipseMode(RADIUS);
  ellipse(ball2.position.x,ball2.position.y,25,25)
  ellipseMode(RADIUS);
  ellipse(ball3.position.x,ball3.position.y,25,25)
  ellipseMode(RADIUS);
  ellipse(ball4.position.x,ball4.position.y,25,25)
  ellipseMode(RADIUS);
  ellipse(ball5.position.x,ball5.position.y,25,25)
  rectMode(CENTER);
  rect(roof.position.x,roof.position.y,300,20)
  rope1.display();
  drawSprites();
 
}



