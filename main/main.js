var Engine = Matter.Engine,
    // Render = Matter.Render, // ignored since p5.js is used as editor.
    World  = Matter.World, 
    Bodies = Matter.Bodies;

var engine, world, bodies;



var floor;
var boxes = [];
var balls = [];

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world  = engine.world;


    floor = new Box(width/2, height/2, width, 10, {isStatic: true, angle: 0.8, friction: 0});
    // triangle = new Triangle(100, 100, 150, 150, 200, 200, true);

    Engine.run(engine);
    // noLoop();   
}

function draw() {
    background(0);

    floor.show();
    for (box of boxes)
        box.show();
    for (ball of balls)
        ball.show();
}