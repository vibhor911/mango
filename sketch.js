
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

    mango1=new mango(1100,100,30);
	//mango1=new mango(1100,75,30);
	//mango1=new mango(1000,100,30);
   // mango1=new mango(1000,80,30);
	//mango1=new mango(1100,60,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

    stoneObj=new stone(250,400,29);
    launcherObject=new launcher(stoneObj.body,{x:250,y:400});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  Engine.update(engine);
  strokeWeight(4);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
 
  
detectCollison(stoneObj,mango1);
//detectCollison(stoneObj,mango2);
//detectCollison(stoneObj,mango3);
//detectCollison(stoneObj,mango4);
//detectCollison(stoneObj,mango5);

  treeObj.display();
  mango1.display();
 // mango2.display();
  //mango3.display();
  //mango4.display();
 // mango5.display();
  stoneObj.display();
  launcherObject.display();
  groundObject.display();
}

function mouseDragged() {
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
	
	}
	
	function mouseReleased() {
	launcherObject.fly();
	console.log("hello");
	}
	
	function keyPressed() {
	 if (keyCode === 32) {
	  Matter.Body.setPosition(stoneObj.body,{x:250,y:400})
	  console.log(stoneObj.body);
	  launcherObject.attach(stoneObj.body);
	 }  
	}

     function detectCollison(lmango,lstone){
     mangoBodyPosition=lmango.body.position;
     stoneBodyPosition=lstone.body.position;
     var distance=dist(mangoBodyPosition.x,mangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y)
     if (distance<=lmango.r+lstone.r) {
        Matter.Body.setStatic(lmango.body,false);
	 }

	 }
