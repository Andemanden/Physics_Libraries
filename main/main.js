var Engine = Matter.Engine,
    // Render = Matter.Render, // ignored since p5.js is used as editor.
    World  = Matter.World, 
    Bodies = Matter.Bodies;

var engine, world, bodies;

var box;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world  = engine.world;
    box = Bodies.rectangle(100, 100, 100, 100);
    
    Engine.run(engine);
    World.add(world, box);
}




function draw() {
    background(250);

    rect(box.position.x, box.position.y, 100, 100 );
}
