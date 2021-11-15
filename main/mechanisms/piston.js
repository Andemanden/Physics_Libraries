const STOPPLATEHEIGHT = 5;

class Piston {
   // cstr:    x,   y,  width,   height, max piston movement, piston acceleration
   constructor(_x, _y, _w = 50, _h = 50, _maxDistance = null, _strength = 0.12) {
      this.x = _x; this.y = _y; this.w = _w; this.h = _h; this.strength = _strength; // parameters for origin position, size and strength
      this.armed = true; 

      if (_maxDistance == null)
         this.maxDistance = _h/2; // default value of maxDistance

      // Different components of structure
      this.base = new Box(_x, _y + _h*0.1, _w, _h * 0.8, {isStatic: true});
      this.piston = new Box(_x, _y + -0.1*_h, _w * 0.9, _h * 0.8);

      this.bottom = new Box(_x, _y + 0.45*_h, _w, _h*0.1, {isStatic: true});
      this.stopplate = new Box(_x, _y - _h/2 - this.maxDistance, _w, 5, {isStatic: true});

      // setting of categories of structure components
      this.base.setcategory(NO_COLLISION);
      this.piston.setcategory(PISTON_MECHANISM_COLLISION | PISTON_STOPPLATE_COLLISION);
      this.bottom.setcategory(PISTON_MECHANISM_COLLISION);
      this.stopplate.setcategory(PISTON_STOPPLATE_COLLISION);

      // constant rotation and x-position of moving body
      Events.on(engine, 'beforeUpdate', () => { // function is run just after engine update sequence
         this.piston.body.angle = 0;
         this.piston.body.position.x = testpiston.x;
      });
   }

   activate() {
      if (Matter.SAT.collides(this.piston.body, this.bottom.body).collided) // if the piston is resting
         Matter.Body.applyForce(this.piston.body, this.piston.body.position, createVector(0, -this.strength*this.piston.body.mass));
   }
   
   show() {
      this.piston.show();
      this.base.show();
   }
}