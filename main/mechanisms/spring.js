class Spring {
   constructor(_x, _y, _w, _h, _springStrength) {
      this.x = _x; this.y = _y; this.w = _w; this.h = _h;
      
      this.platform = new Box(_x, _y - 0.45 * _h, _w, _h * 0.1, {isStatic: true});
      this.base     = new Box(_x, _y + 0.45 * _h, _w, _h * 0.1, {isStatic: true});
      
   }
}