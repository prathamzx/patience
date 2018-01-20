Q.scene("gameStats", function(stage) {
    var statsContainer = stage.insert(new Q.UI.Container({
        fill: "gray",
        x: 960/2,
        y: 620,
        border: 1,
        shadow: 3,
        shadowColor: "rgba(0,0,0,0.5)",
        w: 960,
        h: 40
        })
    );
        
    var lives = stage.insert(new Q.UI.Text({ 
            label: "Lives x 3",
            color: "white",
            x: -300,
            y: 0
        }),statsContainer);
    
    
});