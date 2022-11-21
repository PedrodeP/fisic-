var bloco1, bloco2, bloco3


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

var bloco1_options = {
 restitution:0.1,
 friction:1,
 frictionAir:0
}


var bloco2_options = {
	restitution:0.5,
	friction:1,
	frictionAir:0.9,
   }

   var bloco3_options = {
	restitution:1,
	friction:1,
	frictionAir:0.3,
   }

	
 bloco1 = Bodies.circle(400,20,10,bloco1_options) 
 bloco2 = Bodies.rectangle(600,20,10,8,bloco2_options) 
 bloco3 = Bodies.rectangle(200,20,10,10,bloco3_options) 

World.add(world,bloco1)
World.add(world,bloco2)
World.add(world,bloco3)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ellipse(bloco1.position.x,bloco1.position.y,10)
  rect(bloco2.position.x, bloco2.position.y, 10,8)
  rect(bloco3.position.x,bloco3.position.y,10,10)
}



