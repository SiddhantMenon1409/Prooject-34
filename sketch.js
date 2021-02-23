
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;



var bob;
var roof;
var rope ; 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  
	 roof = createSprite(400,100,500,50);
	 bob1=new bob(200,400);
	 bob2 = new bob(100,400)
	bob3 = new bob(0,400);
	bob4 = new bob(300,400);
	bob5 = new bob(400,400);


	rope1 = new rope(200,150);
	rope2 = new rope(100,150);
	rope3 = new rope(0,150);
	rope4 = new rope(300,150);
	rope5 = new rope(400,150);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  


var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	}
  });
}

function draw() {
  rectMode(CENTER);
  background(0);
   
bob.display();
rope.display();S

  drawSprites();
 
}



