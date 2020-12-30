var canvas,db,gamestate,playercount,allplayers,distance;
var form,player,game;
var car1,car2,car3,car4,cars;
function setup(){
    canvas=createCanvas(displayWidth-20,displayHeight-30)
    db=firebase.database();
    
    game= new Game()
    game.getstate()
    game.start()

}

function draw(){
    background("white");
   if(playercount==4){
       game.updateState(1)
   }
   if(gamestate==1){
       clear()
       game.play()
   }
    
  
}

