class Player{
    constructor(){
    this.index=0
    this.distance=0
    this.name=null
    }
    getcount(){
    db.ref("playercount").on("value",(data)=>{
        playercount=data.val()
    })
    }
    updatecount(count){
     db.ref("/").update({
         playercount:count

     })
    }
    updateplayer(){
        db.ref("players/player"+this.index).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getplayerinfo(){
        db.ref("players").on("value",(data)=>{
            allplayers=data.val()
        })
    }

    
}