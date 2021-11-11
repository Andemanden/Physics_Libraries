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
    camera = new Camera(width, height/2, width, height);

    engine = Engine.create();
    world  = engine.world;

    sliderprop = createSlider(0, 2, 1, 0.01);
    
    floor = new Box(width/2, height/2, width, 10, {isStatic: true, angle: 0.4, friction: 0});
    
    Engine.run(engine);

    spawnLoop();
}

function draw() {
    background(0);

    floor.show();

    
    camera.pan(0, 2);
    camera.setproportion(sliderprop.value());

    for (box of boxes)
        box.show();
    for (ball of balls)
        ball.show();
}

function spawnLoop() {
    balls.push(new Circle(Math.random()*width, 0, 10));
    setTimeout(spawnLoop, 100);
}