var homem,homemImg;
var rua,ruaImg;
function preload(){
homemImg=loadAnimation("Runner-1.png","Runner-2.png");
ruaImg=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

rua =createSprite(200,200);
rua.addImage(ruaImg);
rua.scale=1.35;
rua.velocityY=8;
homem =createSprite(180,340,30,30,);
homem.addAnimation("corredor",homemImg);
homem.scale=0.12
}

function draw() {
  if (rua.y>300){
rua.y=height/3;
  }
  background("black");
  homem.x=mouseX;
drawSprites();
}
