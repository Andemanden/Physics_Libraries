class Physical {
    constructor() {}
    getcampos(cam) {
        var camtopx = cam.x - cam.w / 2;
        var camtopy = cam.y - cam.h / 2;

        var posfromcamx = this.body.position.x - camtopx;
        var posfromcamy = this.body.position.y - camtopy;

        return {x: posfromcamx * camera.proportion,
                y: posfromcamy * camera.proportion};
    }

    getcamangle(cam) {
        return this.body.angle - cam.angle;
    }

    setcategory(cat) {
        this.body.collisionFilter.mask = cat;
        this.body.collisionFilter.category = cat;
    }
}

class Box extends Physical {
    constructor(_x, _y, _w, _h, matteroptions = {}, _isVisible = true) {
        console.log(`Added box: at ${_x}, ${_y}`);
        super();    
        this.visible = _isVisible;
        this.w = _w; this.h = _h;
        this.body = Bodies.rectangle(_x, _y, this.w, this.h, matteroptions);
        World.add(world, this.body);
    }
    
    getcamsize(cam) {
        return {w: this.w*cam.proportion,
                h: this.h*cam.proportion};
    }

    show() {
        push();
        var campos = this.getcampos(camera);
        var camsize = this.getcamsize(camera);
        var camangle = this.getcamangle(camera);

        translate(campos.x, campos.y);
        rotate(camangle);
        fill(255);
        rectMode(CENTER);
        rect(0, 0, camsize.w, camsize.h);
        fill(0);
        circle(0, 0, 2);
        pop();
    }
}

class Circle extends Physical{
    constructor(_x, _y, _radius, matteroptions = {}, _isVisible) {
        super();
        this.visible = _isVisible;
        this.r = _radius;
        this.body = Bodies.circle(_x, _y, this.r, matteroptions);
        World.add(world, this.body);
    }

    getcamsize(cam) {
        return {r: this.r*cam.proportion};
    }

    show() {
        push();
        var campos = this.getcampos(camera);
        var camsize = this.getcamsize(camera);
        var camangle = this.getcamangle(camera);
        
        translate(campos.x, campos.y);
        rotate(camangle);
        fill(255);
        ellipseMode(RADIUS);
        ellipse(0, 0, camsize.r);
        stroke(0);
        line(0, - camsize.r, 0, camsize.r);
        line(-camsize.r, 0, camsize.r, 0);
        pop();
    }
}

class Structure extends Box {
    constructor(_x, _y, _w, _h, matteroptions = {}) {
        matteroptions.isStatic = true;
        super(_x, _y, _w, _h, matteroptions);
        this.setcategory(DEFAULT_COLLISION);
    }
}

class Ball extends Circle {
    constructor(_x, _y, _w, _h, matteroptions = {}) {
        super(_x, _y, _w, _h, matteroptions = {});

        this.setcategory(DEFAULT_COLLISION | PISTON_MECHANISM_COLLISION);
    }
}

class Rectangle extends Physical {
    constructor(_x, _y, _w, _h, matteroptions = {}, _isVisible = true) {
      super();    
      this.visible = _isVisible;
      this.w = _w; this.h = _h;
      this.body = Bodies.rectangle(_x, _y, this.w, this.h, matteroptions);
      World.add(world, this.body);
  }
  getcamsize(cam) {
      return {w: this.w*cam.proportion,
              h: this.h*cam.proportion};
  }
  show() {
      push();
      var campos = this.getcampos(camera);
      var camsize = this.getcamsize(camera);
      var camangle = this.getcamangle(camera);
      translate(campos.x, campos.y);
      rotate(camangle);
      fill(255);
      rectMode(CENTER);
      rect(0, 0, camsize.w, camsize.h);
      fill(0);
      circle(0,0,2);
      pop();
  }

}