class Ground{
    constructor(x,y,width,hight) {
    var option = {
    'restiution':0,
    'friction':0,
    'denstity':1
    }
    this.body = Bodies.rectangle(x,y,width,hight,option);
    this.width = width;
    this.hight = hight;

    World.add(world,thisbody);
    }
    display(){
        rectMode(CENTER);

        fill(255);

        rect(this.body.postion.x,this.body.postion.y,this.width,this.hight);
    }
};