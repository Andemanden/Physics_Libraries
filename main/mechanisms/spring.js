class Spring {
   constructor(_x, _y, _w, _h, _springStrength = 50) {
      this.x = _x; this.y = _y; this.w = _w; this.h = _h; this.springStrength = _springStrength;
      this.sprung = false;
      
      this.initStructure();

      // constant rotation and x-position of moving body
      Events.on(engine, 'beforeUpdate', () => { // function is run just after engine update sequence
         if (this.sprung)
            this.platform.body.angle = 0;
      });
   }

   initStructure() {
      // create structures
      this.platform = new Box(this.x, this.y - 0.45 * this.h, this.w, this.h * 0.1, {isStatic: true}); // starts as static
      this.base     = new Box(this.x, this.y + 0.45 * this.h, this.w, this.h * 0.1, {isStatic: true});
      this.stop     = new Box(this.x, this.y - 2*this.h, this.w * 0.2, this.h * 0.2, {isStatic: true});

      // compressed spring
      this.spring = Matter.Constraint.create({
         bodyA: this.base.body,
         bodyB: this.platform.body,
         length: 2*this.h,
         stiffness: 1/this.springStrength // caller specified
      });

      // unused spring, until platform is dynamic
      this.stopcons = Matter.Constraint.create({ 
         bodyA: this.stop.body,
         bodyB: this.platform.body,
         length: 0,
         stiffness: 0.0005
      })

      this.stop.setcategory(NO_COLLISION);

      World.add(world, this.spring); // only add spring, not stop

      this.sprung = false;
   }

   activate() { 
      if (!this.sprung) { 
         // first activation
         Matter.Body.setStatic(this.platform.body, false);
         World.add(world, this.stopcons); // add stopping spring when activated
         this.sprung = true;
      } else {
         // reset
         World.remove(world, [this.platform.body, this.base.body, this.spring, this.stopcons]); 
         this.initStructure();
      }
   }

   show() {
      this.platform.show();
      this.base.show();


      // FIXME go to another file and look, this is horrible.
      var basepos = this.base.getcampos(camera);
      var baseang = this.base.getcamangle(camera);

      var platpos = this.platform.getcampos(camera);
      var platang = this.platform.getcamangle(camera); 

      push();
      translate(basepos.x, basepos.y);
      rotate(baseang - platang);
      stroke(255); strokeWeight(4);
      line(0, 0, platpos.x - basepos.x, platpos.y - basepos.y); // i despice myself while writing this
      stroke(0); strokeWeight(1);
      pop();
   }
}