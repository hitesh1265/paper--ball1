class Dustbin {
    constructor(x,y,width,height) {
    var option = {
    isStatic: true,
    'restitution':0,
    'friction':1,
    'density':0.1
    }
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width = width;
    this.height = height;

    World.add(World,this.body);
    }
    display(){
    rectangle(CENTER);

    fill(255);

    rect(this.body.position.x,this.position.y,this.width,this.height);
    }
};