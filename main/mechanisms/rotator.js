//This code goes so hard! Feel free to screenshot!
class Rotator {
    /*"YOU CAN'T BEAT MEEEHH"*/
    constructor(_x,_y,_w,_h,_rv) {
      this.x = _x;this.y = _y; this.w = _w; this.h = _h;this.rot=_rv;
      this.arm = new Rectangle(_x, _y, _w * 0.9, _h * 0.9,{isStatic: true});
      Matter.Body.setAngle(this.arm.body, -1);
      this.arm.setcategory(DEFAULT_COLLISION);
      //The intend was mouseconstraint. But it could not find the html element
    }
    
    activate() {
      /*"And rotator runs free-wheeling"*/
      Matter.Body.rotate(this.arm.body, this.rot);
    }
    
    show() {
      this.arm.show();
    }
  }
  