var canvas;
var music;
var box;
var box1;
var box2;
var box3;
var box4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
    box = createSprite(200,200,20,20);
    box.shapeColor = "violet";

    box1 = createSprite(50,390,120,15);
    box1.shapeColor = "purple";

    box2 = createSprite(160,390,120,15);
    box2.shapeColor = "yellow";

    box3 = createSprite(260,390,120,15);
    box3.shapeColor = "red";

    box4 = createSprite(360,390,120,15);
    box4.shapeColor = "blue";

    
        
    

}

function draw() {
    background("cyan");
    
     box.y = mouseY;
     box.x = mouseX;
     
     
     //add condition to check if box touching surface and make it box
    if (box.isTouching(box1)) {
        box.shapeColor = "purple";
        box.play(music);
     }

    if (box.isTouching(box2)) {
        box.shapeColor = "yellow";
        box.play(music);
    } 

    if (box.isTouching(box3)) {
        box.shapeColor = "red";
        box.play(music);
    }

    if (box.isTouching(box4)) {
        box.shapeColor = "blue";
        box.play(music);
    }


    drawSprites();
}
