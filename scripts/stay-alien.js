Quintus.stay_alienComponent=function (Q) {
	Q.Sprite.extend("Stay-alien",
	{
		init:function(p){
			this._super(p,{
				
				sheet: "blue-alien"
			});
		
			this.add("2d,aiBounce");
			this.on("bump.top",function(col){
				if(col.obj.isA("Player")){
					this.destroy();
					col.obj.p.vy -= 200;
				}
			});
			
			this.on("bump.left,bump.right,bump.bottom",function(col){
				if(col.obj.isA("Player")){
					//Q.stageScene("level1");
					//alert("You died!");
				}
			});
		}
	});
	// body...
}