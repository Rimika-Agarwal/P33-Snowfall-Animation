const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snow = [];

var bg;

function preload(){
  bg = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  snow1 = new Snow(100, 5)
  Engine.run(engine);
  
}

function draw() {
  background(bg);  

  if(frameCount%40 === 0){
    snow.push(new Snow(random(30,700), 5))
  }
  for(var i = 0; i < snow.length; i++){
    snow[i].display()
  }
  
}