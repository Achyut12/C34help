const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var rocket, rocketAnimation, offrocket;

function preload() {

rocketAnimation = loadAnimation('ship.on.png','ship.off.png');
offrocket = loadImage('ship.half.png');
}


function setup() {
  createCanvas(1250,700);

  rocket = createSprite(625, 500, 50, 50);
  rocket.addAnimation('boom', rocketAnimation);
  rocket.changeAnimation('boom');

  engine = Engine.create();
  world = engine.world;                




}


function draw() 
{
  background(54);
  Engine.update(engine);
  
  
}