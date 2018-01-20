Quintus.alienComponent=function (Q) {
	Q.Sprite.extend("Alien",
	{
		init:function(p){
			this._super(p,{
				vx: -60,
				defaultDirection:"left",
				sheet: "yellow-alien"
			});
			this.add("2d,aiBounce");
			
			this.on("bump.left,bump.right,bump.bottom,bump.top",function(col){
				if(col.obj.isA("Player")){
					Q.stageScene("level1");
					alert("You died!");

				}
			});
		}
	});
	// body...
}