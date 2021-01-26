class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    display(){
        if (this.launcher.bodyA) {
            var pointA = this.launcher.bodyA.position;
            var pointB = this.launcher.pointB;
            strokeWeight(4);
        }
         }
 
    fly() {
     this.launcher.pointB=null;   
    }
        
    attach(body){
    this.launcher.bodyA=body;
    this.launcher.pointB=this.pointB;
    }
}
