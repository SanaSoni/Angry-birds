class container {
    constructor(thickness, height, x, y){
        var options ={
            'restitution' : 0.4,
            'density' : 1.0,
          
        }
        this.thichkness = thickness;
        this.height = height;
        this.container = Bodies.rectangle(x, y, thickness, height, options);

        World.add(world, this.container);
    }

    display(){
        var pos = this.container.position;
        var angle = this.container.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0, 0, this.thickness, this.height);
        
        pop();
    }
}