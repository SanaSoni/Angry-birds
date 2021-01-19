const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground, pigs, jar;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    //box1 = new Box(200,300,50,50);
    //box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,400,20)
    //pigs = new pig(180,120);
    jar = new container(20,50,200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    //console.log(pigsbody.position.x);
    //console.log(pigs.body.position.y);
    //console.log(pigs.body.angle);
    //box1.display();
    //box2.display();
    ground.display();
    //pigs.display();
    jar.display();
}