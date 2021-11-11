class Camera {
   constructor(_x, _y, _w = null, _h = null, _angle = 0) {
      this.x = _x; this.y = _y; this.angle = _angle;
      if (_w != null || _w != 0) 
         this.setwidth(_w);
      else if (_h != null || _h != 0)
         this.setwidth(_w);
   }
   
   setpos(x, y) {
      this.x = x; this.y = y;
   }

   setwidth(w) { // sets screen zoom based on given width
      this.w = w;
      this.proportion = width/this.w;
      this.h = height/this.proportion;
   }
   //
   setheight(h) {
      this.h = h;
      this.proportion = height/this.h;
      this.w = width/this.proportion;
   }

   setangle(a) {
      this.angle = a;
   }

   setproportion(prop) {
      this.proportion = prop;
      this.w = width/this.proportion;
      this.h = height/this.proportion;
   }

   pan(dx, dy) {
      this.x += dx; this.y += dy;
   }

   zoom(zoomlvl) { // change in proportion
      this.setproportion(this.proportion * zoomlvl);
   }

   rotate(a) {
      this.angle += a;  
   }
}
