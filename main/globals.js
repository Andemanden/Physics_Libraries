// Global functions and parameters

function keyPressed() {
   var addedVect = Matter.Vector.create(0, -0.005);
   for (ball of balls)
       Matter.Body.applyForce(ball.body, ball.body.position, addedVect);
}