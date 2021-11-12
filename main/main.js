var Engine = Matter.Engine,
    // Render = Matter.Render, // ignored since p5.js is used as editor.
    World  = Matter.World, 
    Bodies = Matter.Bodies
    Runner = Matter.Runner
    Events = Matter.Events;

var engine, world, bodies;

var camera;

var testpiston, testball;

function setup() {
    createCanvas(800, 400);
    camera = new Camera(width / 2, height/2, width, height);

    engine = Engine.create();
    world  = engine.world;

    testball = new Ball(width/2, height - 200, 30);
    testpiston = new Piston(width/2, height - 50, 100, 100)

    Events.on(engine, "beforeUpdate", moves);

    Runner.run(engine);
}

function draw() {
    background(0);

    testball.show(); testpiston.show();
}