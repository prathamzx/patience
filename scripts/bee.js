Quintus.beeComponent= function(Q){
	Q.Sprite.extend("Bee",{
		init:function(p){
			this._super(p,{
				vy: -50,
				dir: -1,
				sheet: "bee",
				gravity: 0
			});
			this.add("2d");
			this.on("bump.top,bump.bottom",function(col){
				if(this.p.dir==-1){
					this.p.dir=1;
					this.p.vy=50;
				}
				else{
					this.p.dir=-1;
					this.p.vy=-50;
				}
			});
			this.on("hit.sprite",function(col){
				if(col.obj.isA("Player")){
					Q.stageScene("level");
					alert("You died!");
				}
			});
		}
	});
}