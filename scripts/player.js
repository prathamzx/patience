Quintus.playerComponent=function (Q) {
	Q.Sprite.extend("Player",{
		init: function(p){
			this._super(p,{
				sheet: "player",
				jumpSpeed: -350,
				speed: 100,
				lives: 3
			});
			this.add("2d,platformerControls");
		}
		
	});

}