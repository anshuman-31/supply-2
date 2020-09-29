class dustbin {
    constructor(x,y,width,height) {
        var options = {
         'restitution':0.8

        }
        this.body=bodies.rectangle(x,y,20,200);
        this.width =20;
        this.height=200;

        World.add(World, this.body);
    }
    display(){
     var pos =this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTRE);
     Fill(255);
     rect(0,0,this.width,this.height);
     pop();

    }
};

    






