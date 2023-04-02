//This script is adding rnav gauges for those cc planes, that originally having them, but it's not included in the game.

setInterval(
    function(){
        //hsi
        if(["3292", "3054", "3575", "2843", "2899", "2878", "1879", "3140", "2534", "2870", "2871", "2865", "242", "244", "2153", "2973", "239", "2856", "2788", "3011", "2772", "2769", "3054", "252", "238", "237", "4402", "240", "3179", "3180", "235", "2386", "2706", "3307", "247", "236", "2943", "3341", "3036", "2700", "4017", "2857", "3617", "2857", "2892", "3109", "2976", "2864"].includes(geofs.aircraft.instance.id) && geofs.aircraft.instance.setup.instruments["hsi"] === undefined){
            geofs.aircraft.instance.setup.instruments["hsi"] = {"animations": [{"value": "view", "type": "show", "notEq": "cockpit"}]};
            instruments.init(geofs.aircraft.instance.setup.instruments);
        }
        //cdi
        else if(["2808", "4390", "3286", "3460", "3591", "2681", "4398", "4401", "2948", "4140"].includes(geofs.aircraft.instance.id) && geofs.aircraft.instance.setup.instruments["cdi"] === undefined){
            geofs.aircraft.instance.setup.instruments["cdi"] = {"animations": [{"value": "view", "type": "show", "notEq": "cockpit"}]}
            if(geofs.aircraft.instance.setup.instruments["rpm"] !== undefined){ // avoiding to hide the rpm
                delete geofs.aircraft.instance.setup.instruments["rpm"]
                geofs.aircraft.instance.setup.instruments["rpm"] = {"animations": [{"value": "view", "type": "show", "notEq": "cockpit"}]}
            }
            instruments.init(geofs.aircraft.instance.setup.instruments);
        }
    },
500)
