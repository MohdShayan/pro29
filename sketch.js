const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world

var ground1,ground2,ground3;
var box1a,box1b,box1c,box1d,box1e,box1f,box1g;
var box2a,box2b,box2c,box2d,box2e,box2f,box2g;
var box3a,box3b,box3c,box3d,box3e,box3f,box3g;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11;

var polygonImg,ball;

function preload() {
  polygonImg =loadImage("poly.png")
}
function setup() {
  engine = Engine.create();
  world=engine.world;

  createCanvas(1600,800);
  createSprite(400, 200, 50, 50);

 ground1 = new Ground(10,790,3200,20);
 ground2 = new Ground(600,550,500,15)
 ground3 = new Ground(1250,400,500,15)

 box1a = new Box(200,254,45,70);
 box1b = new Box(225,254,45,70);
 box1c = new Box(250,254,45,70);
 box1d = new Box(275,254,45,70);
 box1e = new Box(300,254,45,70);
 box1f = new Box(325,254,45,70);
 box1g = new Box(350,254,45,70);
 box1h = new Box(375,254,45,70);
 box1i = new Box(400,254,45,70);

 box2a = new Box(212,217,45,70);
 box2b = new Box(242,217,45,70);
 box2c = new Box(272,217,45,70);
 box2d = new Box(302,217,45,70);
 box2e = new Box(332,217,45,70);
 box2f = new Box(362,217,45,70);
 box2g = new Box(392,217,45,70);

 box3a= new Box(228,180,45,70);
 box3b= new Box(259,180,45,70);
 box3c= new Box(290,180,45,70);
 box3d= new Box(321,180,45,70);
 box3e= new Box(351,180,45,70);
 box3f= new Box(381,180,45,70);
 box3g= new Box(401,180,45,70);

box1 = new Box(519,175,60,80);
box2 = new Box(620,175,60,80);
box3 = new Box(730,175,60,80);
box4 = new Box(625,150,450,25);
box5 = new Box(565,123,60,80);
box6 = new Box(670,123,60,80);
box7 = new Box(620,96,220,25);
box8 = new Box(585,71,50,70);
box9 = new Box(660,71,50,70);
box10 = new Box(620,48,165,20);
box11 = new Box(619,28,45,60);


ball = Bodies.circle(120,250,20);
World.add(world,ball);

slingshot= new SlingShot(this.ball,{x:120,y:250})

Engine.run(engine);
}

function draw() {
  background(241, 166, 158);  
  Engine.update(engine);


ground1.display();
ground2.display();
ground3.display();
push();
fill(0,164,204);
box1a.display();
box1b.display();
box1c.display();
box1d.display();
box1e.display();
box1f.display();
box1g.display();
box1h.display();
box1i.display();

box3a.display();
box3b.display();
box3c.display();
box3d.display();
box3e.display();
box3f.display();
pop();

push();
fill(249, 87, 0);
box2a.display();
box2b.display();
box2c.display();
box2d.display();
box2e.display();
box2f.display();
box2g.display();
pop();



push();
fill(126, 184, 24)
box1.display();
box2.display();
box3.display();
box8.display();
box9.display();
pop();

push();
fill(236, 188, 29 );
box4.display();
box7.display();
box10.display();
pop();

push();
fill(101, 24, 60 )
box5.display();
box6.display();
box11.display();
pop();


slingshot.display();

imageMode(CENTER);
image(polygonImg,ball.position.x,ball.position.y,70,70);



}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
 
  slingshot.fly();
}