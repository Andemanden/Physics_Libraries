var Engine = Matter.Engine,
    // Render = Matter.Render, // ignored since p5.js is used as editor.
    World  = Matter.World, 
    Bodies = Matter.Bodies;

var engine, world, bodies;

var startTime;

var camera;

function setup() {
    startTime = millis();
    createCanvas(800, 400);
    camera = new Camera(width, height/2, width, height);

    engine = Engine.create();
    world  = engine.world;
    
    Engine.run(engine);
}

function draw() {
    background(0);
}