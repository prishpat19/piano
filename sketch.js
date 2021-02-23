var canvas;
var music;
var box, a, b, c, d;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
  

    a = createSprite (280, 500, 150, 20);
    a.shapeColor = "turquoise"
    b = createSprite (100, 500, 150, 20);
    b.shapeColor = "magenta";
    c = createSprite (460, 500, 150, 20);
    c.shapeColor = "purple";
    d = createSprite (640, 500, 150, 20);
    d.shapeColor = "green";
    box = createSprite(random(20, 750), 200, 20, 20);
    box.shapeColor = "black";
    box.velocityY = 3;
   


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    if (Istouching(b, box)){
        box.shapeColor = "magenta";
        b.shapeColor = "magenta";

        music.play();
       }
      

      if (Istouching(a, box)){
        box.shapeColor = "turquoise";
        a.shapeColor = "turquoise";

        music.play();
       }
       
      
      if (Istouching(c, box)){
        box.shapeColor = "purple";
        c.shapeColor = "purple";
        music.play();
       }
      
     
      if (Istouching(d, box)){
        box.shapeColor = "green";
        d.shapeColor = "green";
        music.play();
       }

       if(bounceOff(a, box)){
           music.play = false;
       }
       if(bounceOff(b, box)){
        music.play = false;
    } if(bounceOff(c, box)){
        music.play = false;
    }
    if(bounceOff(d, box)){
        music.play = false;
    }
    
     
bounceOff(box, a, b, c, d);

  drawSprites();  //add condition to check if box touching surface and make it box
}
function Istouching(object1, object2){
 
 
    if (object1.x -  object2.x <  object2.width/2 + object1.width/2
      &&  object2.x - object1.x <  object2.width/2 + object1.width/2
      && object1.y -  object2.y <  object2.height/2 + object1.height/2
      && object2.y - object1.y <  object2.height/2 + object1.height/2) {
   
        return true;
  }
  else {
   return false;
  }
  }

  function bounceOff(object1, object2){

    if (object1.x -  object2.x <  object2.width/2 + object1.width/2
      &&  object2.x - object1.x <  object2.width/2 + object1.width/2
    ){
  
       object1.velocityX = object1.velocityX*(-1);
       object2.velocityX = object2.velocityX*(-1);
  }
  
  if(object1.y -  object2.y <  object2.height/2 + object1.height/2
    && object2.y - object1.y <  object2.height/2 + object1.height/2){
  
      object1.velocityY = object1.velocityY*(-1);
       object2.velocityY = object2.velocityY*(-1);
    }
  
  }
 
  