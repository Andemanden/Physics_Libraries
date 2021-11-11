var Engine = Matter.Engine,
    // Render = Matter.Render, // ignored since p5.js is used as editor.
    World  = Matter.World, 
    Bodies = Matter.Bodies
    Runner = Matter.Runner
    Events = Matter.Events;

var engine, world, bodies;

var camera;

function setup() {
    createCanvas(800, 400);
    camera = new Camera(width / 2, height/2, width, height);

    engine = Engine.create();
    world  = engine.world;

    Runner.run(engine);
}

function draw() {
    background(0);
}