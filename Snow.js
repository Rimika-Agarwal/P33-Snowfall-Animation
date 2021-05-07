class Snow{
    constructor(x,y){
        var options ={
            restitution: 1,
            density: 0.5
        }

        this.r = 20;
        this.image = loadImage("snow5.webp")
        this.body = Bodies.circle(x,y,20,options);
        World.add(world, this.body)

    }

    display(){
        var pos = this.body.position;

        push()
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r*2, this.r*2)
        pop()
    }
}