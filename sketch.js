
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var Ball;
var Box1, Box2, Box3;

function preload(){
  PaperImg = loadImage('paper.png');
  Dustbin = loadImage('dustbingreen.png');
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	var ball_options = {
		restitution: 0,
		friction: 0.5,
		density: 0.6

	}
	Ball = Bodies.circle(150,640,20, ball_options);
	World.add(world, Ball);
   
  Box1 = new Box(650, 633, 100, 15);
  Box2 = new Box(600, 590, 10, 100);
  Box3 = new Box(704, 590, 10, 100);

    Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("white");

  rectMode(CENTER);
  fill("yellow");
  rect(ground.position.x, ground.position.y, 800, 10);

  imageMode(CENTER);
  image(PaperImg, Ball.position.x, Ball.position.y, 30,30);

  Box1.display();
  Box2.display();
  Box3.display();

  image(Dustbin, 652, 580, 100,100);
}

 function keyPressed(){
	 if (keyCode === 38) {
		 Matter.Body.applyForce(Ball, Ball.position,{x: 10, y: -10})
	 }
 }









