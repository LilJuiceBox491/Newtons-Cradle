var bd;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

var roofObj, bobObj1, bobObj2, bobObj3, bobObj4, bobObj5, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	/*
	nothing to preload
	*/
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bd = 40

	bobsx = width/2;
	bobsy = height/4+350; 

	roofObj = new roof(width/2,height/4,width/3.5,20);
	bobObj1 = new bob(bobsx-bd*2,bobsy,bd)
	bobObj2 = new bob(bobsx-bd,bobsy,bd)
	bobObj3 = new bob(bobsx,bobsy,bd)
	bobObj4 = new bob(bobsx+bd,bobsy,bd)
	bobObj5 = new bob(bobsx+bd*2,bobsy,bd)
	rope1 = new rope(bobObj1.body,roofObj.body,-bd*2,0)
	rope2 = new rope(bobObj2.body,roofObj.body,-bd,0)
	rope3 = new rope(bobObj3.body,roofObj.body,0,0)
	rope4 = new rope(bobObj4.body,roofObj.body,bd*1,0)
	rope5 = new rope(bobObj5.body,roofObj.body,bd*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightgray');
  roofObj.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-50,y:-60});
	}
}