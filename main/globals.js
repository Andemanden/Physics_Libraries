const NO_COLLISION               = 0b0000;
const DEFAULT_COLLISION          = 0b0001; // for every normal object
const PISTON_MECHANISM_COLLISION = 0b0010; // for collision with the piston.
const PISTON_STOPPLATE_COLLISION = 0b0100;

var keysdown = [];

// key character to char code
function ktocc(key) {
   return key.charCodeAt(0);
}

// User input
function mousePressed() 
{
   testpiston.activate();
}

function keyPressed() {
   keysdown.push(keyCode);
}
function keyReleased() {
   keysdown.splice(keysdown.indexOf(keyCode));
}

// Character movement
function moves() {
   for (key of keysdown) {
      switch (key) {
         case ktocc("w"):
            console.log("w");
            break;
         default:
            console.log("no");
      }
   }
}