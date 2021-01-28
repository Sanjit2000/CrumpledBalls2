class Ball {
constructor (x,y,width,height){
var options = {
restitution : 0.9,
density : 1,
friction : 0.5

}
this.body = Bodies.rectangle(100,200,50,options)
this.image = loadImage("paper.png")
World.add(world,this.body)
}

display(){

var pos =this.body.position;
imageMode(CENTER);
image(this.image,100,620, 140,140
    
    
    );
ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,50,50)

}

}

//class Ball {
    //constructor(x,y,width,height) {
      //var options = {
        //restitution : 0.9,
        //density : 1,
        //friction : 0.5
      //}
      //this.body = Bodies.rectangle(x,y,width,height,options);
      //this.image = loadImage("paper.png")
      //World.add(world, this.body);
    //}
    //display(){
      //var pos =this.body.position;
      //imageMode(CENTER);
      //image(this.image,100, 620, 140, 140);
      //ellipseMode(RADIUS)
      //ellipse(this.body.position.x,this.body.position.y,70,50)
      
    //}
  //};     