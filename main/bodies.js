class Physical {
    constructor(_x, _y) {
        this.x = _x; this.y = _y;
    }

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
}

class Box extends Physical {
    constructor(_x, _y, _w, _h, matteroptions = {}) {
        console.log(`Added box: at ${_x}, ${_y}`);
        super(_x, _y)
        this.w = _w; this.h = _h;

        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, matteroptions);
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
    constructor(_x, _y, _radius) {
        super(_x, _y); this.r = _radius;
        this.body = Bodies.circle(this.x, this.y, this.r);
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
