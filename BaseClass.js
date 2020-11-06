class BaseClass{
    constructor(x,y,width,height,angle){
        var options={
            restitution:0.5,
            friction:1.0,
            density:0.2
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/base.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);


    }
    display(){
        var pos;
        var ang;
        ang=this.body.angle;
        pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        pop();
    };





}