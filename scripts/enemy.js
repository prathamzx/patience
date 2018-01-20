Quintus.enemyComponent=function (Q) {
	Q.Sprite.extend("Enemy",
	{
		init:function(p){
			this._super(p,{
				vx: -40,
				defaultDirection:"left",
				sheet: "ghost"
			});
			this.add("2d,aiBounce");
			this.on("bump.top",function(col){
				if(col.obj.isA("Player")){
					this.destroy();
					col.obj.p.vy -= 200;
					Q.audio.play('jump.mp3');
				}
			});
			this.on("bump.left,bump.right,bump.bottom",function(col){
				if(col.obj.isA("Player")){
					Q.stageScene("level1");
					alert("You died!");
				}
			});
			
		}
	});
	// body...
}
