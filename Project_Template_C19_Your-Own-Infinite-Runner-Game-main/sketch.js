var bird;
var tower;
var ground, ground2;
var background;
var grupo_obst, obstaculo;
var score;
var PLAY=1;
var FIM=0;
var estadojogo=PLAY;
var reset;

function preload(){
bird = loadImage("passaro.png");
obstaculo = loadImage("cano.png");
background = loadImage("fundo.jpg");
};

function setup() {
 createCanvas(windowWidth,windowHeight);

//criando o fundo
if (background.x < width*0.2){
    background.x=background.width/2;
    };


//criando o passaro    
bird.x=50; 
bird.y=windowHeight/2;

//criando o chão
ground =createSprite(windowWidth/2,windowHeight,500,20);

//criando o teto
ground2 =createSprite(windowWidth/2,0,500,20);

//criando os grupos dos obstaculos
grupo_obst=createGroup();
};

//criando a pontuação
score=0;

function draw() {

     //pular quando a seta for pressionada
  if  (touches.length>0 || keyDown("Space") && bird.y){
    bird.velocityY = -14 ;
    touches=[];
  }
  bird.velocityY = bird.velocityY + 1;



 //colisão do passaro para acabar o jogo
 if (grupo_obst.isTouching(bird) || ground.isTouching(bird) || ground2.isTouching(bird)){
    estadojogo = FIM;   
}


else if(estadojogo == FIM){

  //deixar visivel o gameover e o restart.
  gameover.visible=true;
  restart.visible=true;

  bird.changeAnimation("morto",dead_bird);
  ground.velocityX=0;
  background.setVelocityX=0;
  grupo_obst.setVelocityXEach(0);
  trex.velocityY=0

  //definir tempo de vida
  grupo_obst.setLifetimeEach(-4);

  if (mousePressedOver(restart) || touches.length>0){
  reset();
  touches=[];
  }
}

 drawSprites();
};


//criando obstaculos
numero =Math.round(random(50,(height/8)*7));

function criar_obstaculos(){  
    if (frameCount % 65 == 0){
       obstaculo =createSprite(width+20,numero,10,40);
       obstaculo.velocityX=-(40);
       obstaculo.lifetime=width+40;
       grupo_obst.add(obstaculo);
    };
};

function reset(){

    score=0;
    estadojogo = PLAY;
    grupo_obst.destroyEach();
    gameover.visible=false;
    restart.visible=false;
    bird.changeAnimation("passaro", bird);
}