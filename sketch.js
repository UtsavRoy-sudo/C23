const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var G1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(230,100,75,100);
    box2 = new Box(200,150,50,50);
    G1 = new Ground(200,400,400,30);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    G1.display();
   
}