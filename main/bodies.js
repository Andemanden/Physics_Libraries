class Box {
   constructor(_x, _y, _w, _h, matteroptions = {}) {
       console.log(`Added box: at ${_x}, ${_y}`);
       this.x = _x; this.y = _y; this.w = _w; this.h = _h;
       this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, matteroptions);
       World.add(world, this.body);
   }

   show() {
       var pos = this.body.position;
       var angle = this.body.angle;
       // console.log(pos, angle);

       push();
       translate(pos.x, pos.y);
       rotate(angle);
       fill(255);
       rectMode(CENTER);
       rect(0, 0, this.w, this.h); 
       fill(0);
       circle(0,0, 2);

       pop();
   }
}

class Circle {
   constructor(_x, _y, _radius) {
       this.x = _x; this.y = _y; this.r = _radius;
       this.body = Bodies.circle(this.x, this.y, this.r);
       World.add(world, this.body);
   }

   show() {
       var pos = this.body.position;
       var angle = this.body.angle;

       push() 
       translate(pos.x, pos.y);
       rotate(angle);
       fill(255);
       ellipse(0, 0, this.r*2, this.r*2);
       stroke(0);
       line(-this.r, 0, this.r, 0);
       pop();
   }
}

// class Triangle {
   // constructor(x1, y1, x2, y2, x3, y3, _isStatic) {
       // this.body = Bodies.fromVertices(x1, y1, [{x1, y1}, {x2, y2}, {x3, y3}], {isStatic: _isStatic});
       // World.add(world, this.body);
   // }
// 
   // show() {
       // var pos = this.body.position;
// 
       // console.table(this.body.vertices[0]);
// 
       // push();
       // translate(pos.x, pos.y);
       // 
       // stroke(255);    
       // line(0, 0, this.body.vertices[0].position.x, this.body.vertices[0].y);
       // line(0, 0, this.body.vertices[1].position.x, this.body.vertices[1].y);
// 
       // pop();
   // }
// }
