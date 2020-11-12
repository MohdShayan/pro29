class Box  {
    constructor(x, y, width, height){
        var options={
          isStatic: true,
            restitution:0.4,
            friction:0.5
            
        }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;
    World.add(world,this.body);
  
    }
  display(){
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      strokeWeight(1);
      stroke("black");
      rect(this.x,this.y,this.width,this.height)
      pop();
  }
  };