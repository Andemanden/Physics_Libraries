var Engine = Matter.Engine,
    // Render = Matter.Render, // ignored since p5.js is used as editor.
    World  = Matter.World, 
    Bodies = Matter.Bodies;

var engine, world, bodies;

var startTime;

var floor;
var boxes = [];
var balls = [];

var camera;

var sliderx, slidery, sliderprop;

function setup() {
    startTime = millis();
    createCanvas(800, 400);
    camera = new Camera(width/2, height/2, width, height);

    engine = Engine.create();
    world  = engine.world;
    
    floor = new Box(width/2, height/2, width, 10, {isStatic: true, angle: 0.4, friction: 0});
    
    Engine.run(engine);
}

function draw() {
    background(0);

    floor.show();

    if (balls[0] != null)
        camera.setpos(balls[0].body.position.x, balls[0].body.position.y);

    for (box of boxes)
        box.show();
    for (ball of balls)
        ball.show();
}