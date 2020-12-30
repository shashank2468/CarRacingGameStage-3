class Form{
    constructor(){
        this.input=createInput("ENTER YOUR NAME")
        this.button=createButton("START")
        this.title=createElement("h1")
        this.greeting=createElement("h3")
    }
    display(){
        this.title.html("CAR RACING GAME")
        this.title.position(displayWidth/2-50,0)
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playercount+=1
            player.index=playercount
            player.updateplayer()
            player.updatecount(playercount)
            this.greeting.html("WELCOME"+player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })
        
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.title.hide()
        this.greeting.hide()
    }

    
    
    
}