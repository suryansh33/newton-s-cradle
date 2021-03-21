class Bob {
constructor(x,y){
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.bob=Bodies.circle(x,y,30,options)
this.radius=30;
World.add(world,this.rain)


}
displa(){
    var pos=this.bob.position;
    fill("grey")
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.radius)
}
}