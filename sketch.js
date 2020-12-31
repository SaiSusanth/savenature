
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, ground2, Dustbin1, Dustbin2, Dustbin3;
var paperImg, dustbinImg;
var backgroundImg;

function preload()
{
	backgroundImg = loadImage("images/bk.jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

		paper = new Paper (75, 575, 30);
		ground = new Ground (400, 603, 800, 35);
		ground2 = new Ground2 (400, 659, 800, 82);
		Dustbin1 = new Dustbin (653, 570, 5, 35);
		Dustbin2 = new Dustbin (625, 585, 50, 5);
		Dustbin3 = new Dustbin (597, 570, 5, 35);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);

  	Engine.update(engine);
	paper.display();
	ground.display();
	ground2.display();
	Dustbin1.display();
	Dustbin2.display();
	Dustbin3.display();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body, paper.body.position, {x:14, y:-8});

	}

}



