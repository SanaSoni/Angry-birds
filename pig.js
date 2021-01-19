class pig {
    constructor(x,y){
        var options ={
            'restitution' :0.8,
            'friction' :0.3,
            'density' :1.0
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        world.add(world, this.body);
    }
  
display(){
    this.angle=this.body.angle;
    this.position=this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTRE);
    rect(180,200,this.width, this.height);
    fill("green");
    pop();
}

}
