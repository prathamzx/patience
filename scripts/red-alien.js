Quintus.redComponent=function (Q) {
	Q.Sprite.extend("Red-alien",
	{
		init:function(p){
			this._super(p,{
				
				sheet: "red-alien"
			});
			this.add("2d,aiBounce");
			
			this.on("bump.top,bump.left,bump.right,bump.bottom",function(col){
				if(col.obj.isA("Player")){
					Q.stageScene("level1");
					alert("You died!");

				}
			});
		}
	});
	// body...
}