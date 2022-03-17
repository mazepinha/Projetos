class Game {
  constructor() {}

  //criando o objeto do formulario e o novo jogador
  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount=player.getCount();
  }

  getState(){
    var gameStateRef=database.ref("gameState");
    gameStateRef.on("value",function(data){
      gameState=data.val();
    });
    

  }
}
