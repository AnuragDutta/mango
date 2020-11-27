const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var bgimg, backgroundImage


function preload(){
tree = loadImage("sprites/tree.png")
}




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20)
    platform = new Ground(800,150,250,20)

    pig1 = new Pig(700, 100);

    pig3 = new Pig(810, 100);

    bird = new Bird(265,50);

    sling = new Catapault(bird.body,{x : 300, y : 230})

}

function draw(){
    background(0);
    image(tree,500,-50,600,500)
    Engine.update(engine);
    ground.display();
    pig1.display();

    pig3.display();

    bird.display()
    sling.display()
}

function keyPressed(){
    if(keyCode===32){
        bird.trajectory = []
        sling.attach(bird.body)
    }
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body , {x:mouseX, y:mouseY})
}

function mouseReleased(){
    sling.fly()
}

async function getbackgroundImage(){
    var response = await fetch ('https://worldtimeapi.org/api/timezone/Asia/Tokyo')
    var responseJSON = await response.json()
    var hour = responseJSON.datetime.slice(11,13)
    console.log(hour)
    if(hour >= 06 && hour<= 19){
        bgimg = "sprites/bg.png"
    }
    else{
        bgimg = "sprites/bg2.jpg"
    }
backgroundImage = loadImage(bgimg)
}
