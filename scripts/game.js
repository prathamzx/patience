window.addEventListener("load",function() {
var Q= window.Q=new Quintus().include("Sprites,Scenes,2D,Touch,TMX,Input,Audio")
.include("playerComponent,enemyComponent,beeComponent,gemComponent,alienComponent,flowerComponent,stay_alienComponent,redComponent,bugComponent")
      
      .setup({
      	width:320,
      	height:240,
      	scaleToFit: true
      })
      .controls(true).touch();
console.log(Q);
Q.enableSound();
      Q.setImageSmoothing(false);

      Q.scene("level1",function(stage){
      	var player;

      	Q.stageTMX("levelx.tmx",stage);
      	player=Q("Player").first();
      	stage.add("viewport").follow(player,{x:true,y:true});
      });

      Q.loadTMX("levelx.tmx,sprites.png,sprites.json,jump.mp3,music.mp3",function(){
      	Q.compileSheets("sprites.png","sprites.json");
      	// console.log("abc");
      	Q.stageScene("level1");
            Q.audio.play('music.mp3',{loop:true});
      });
});
        
        
        
        
        
        