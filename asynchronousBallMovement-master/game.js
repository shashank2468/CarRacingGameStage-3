class Game{
    constructor(){


    }
    getstate(){
   db.ref("Gamestate").on("value",(data)=>{
       gamestate=data.val()
   })
   
    }
    updateState(state){
    db.ref("Gamestate").update({
        Gamestate:state
    })
    }
    async start(){
        if(gamestate==0){
            player= new Player()
            var pcref=await db.ref("playercount").once("value")

            if(pcref.exists()){
                playercount=pcref.val()
                player.getcount()


            }

        form= new Form()
        form.display()


          }

         car1=createSprite(100,200);
         car2=createSprite(300,200);
         car3=createSprite(500,200);
         car4=createSprite(700,200); 
         cars=[car1,car2,car3,car4]
    }

    play(){
     form.hide();
    Player.getplayerinfo();
    if(allplayers !== undefined){
      var index=0;
      var x=0;
      var y;
      for( var plr in allplayers ){
          index=index+1
          x=x+200
          y=displayHeight-allplayers[plr].distance
          cars[index-1].x=x
          cars[index-1].y=y
          if(index==player.index){
              cars[index-1].shapeColor="red"
              camera.position.x=displayWidth/2
              camera.position.y=cars[index-1].y
          }
      }
    }
            if(keyIsDown(UP_ARROW) && player.index !== null){
                player.distance +=10
                player.update()
            }
drawSprites();

    }
}