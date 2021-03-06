const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var enemy1,enemy2;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,100,70,70);      
    
    bird1 = new Bird(320,300,40,40);

    enemy1 = new Enemy(810,320,50,50);  
    enemy2 = new Enemy(810,240,50,50);

    log1 = new Log(810,260,30,300,PI/2);
    log2 = new Log(810,180,30,300,PI/2);
    log3 = new Log(760,90,30,150,PI/7);
    log4 = new Log(870,90,30,150,-PI/7);

    ground = new Ground(600,390,1200,10)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    enemy1.display();
    enemy2.display();
    ground.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}