// Global functions and parameters

function mousePressed() {
   // var newBox = new Box(mouseX, mouseY, 20, 20);
   // boxes.push(newBox);

   var newCirc = new Circle(mouseX, mouseY, 20);
   balls.push(newCirc);
}

function keyPressed() {
   var addedVect = Matter.Vector.create(0, -0.05);
   for (ball of balls)
       Matter.Body.applyForce(ball.body, ball.body.position, addedVect);
}