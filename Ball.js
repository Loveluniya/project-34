class Ball {
  constructor(x,y,r){
   
   let options={
   restitution:0.001
   }
   
   this.body = Bodies.circle(x,y,r,options);
   this.r = r;
   
   this.image = loadImage("basketball.png");


   World.add(world,this.body);
   }
   show(){
   
   let pos = this.body.position;
   push();
   translate(pos.x,pos.y);
   imageMode(CENTER);
   fill("yellow");
   
   image(this.image, 0, 0, this.r, this.r);
   pop();
   }
   }