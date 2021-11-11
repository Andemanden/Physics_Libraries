const ALL_COLLISIONGROUP = 0;

const PISTONBASE_COLLISIONGROUP = 1;
const PISTONROD_COLLISIONGROUP  = 0;
const PISTONTOP_COLLISIONGROUP  = 1;

class Piston {
   constructor(_x, _y, _w = 50, _h = 50, maxDistance = null) {
      console.log(`Added piston at ${_x}, ${_y}`)
      this.base = new Box(_x, _y + _h*0.1, _w, _h * 0.8, {isStatic: true});
      this.top  = new Box(_x, _y - 2/5*_h, _w, _h*0.2);
      this.rod = new Box(_x, _y, _w*0.2, _h*0.6);

      this.base.body.collisionFilter.category = PISTONBASE_COLLISIONGROUP;
      this.top.body.collisionFilter.category  = PISTONTOP_COLLISIONGROUP;
      this.rod.body.collisionFilter.category  = PISTONROD_COLLISIONGROUP;

      
      this.pushedDistance = 0;
      if (maxDistance == null) { // if no max distance value is given, it defaults to this.
         maxDistance = _h;
      }
   }

   activate() {
      // start velocity loop
   }

   update() {
      this.pushedDistance = this.rod.y - this.y; // how far the rod has moved
      if (this.pushedDistance > maxDistance) {
         console.log("Too Far!");
      }
   }

   show() {
      this.top.show();
      this.rod.show();
      this.base.show();
   }
}