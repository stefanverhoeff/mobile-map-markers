(function() {
    nokia.mh5.assetsPath = "http://api.maps.nokia.com/mobile/0.2.0/lib/";
    nokia.mh5.appId = "_peU-uCkp-j8ovkzFGNU";
    nokia.mh5.appCode = "gBoUkAMoxoqIWfxWA5DuMQ";

    var map = new nokia.mh5.components.Map({
        center: {
            longitude: 13.3896145,
            latitude: 52.5166648
        },
        zoom: 12,
        schema: "normal.day",
        tracking: true,
        listeners: {
            poiclick: function(e) {/*your listener*/},
            mapmovestart: function() {/*your listener*/},
            mapmoveend: function() {/*your listener*/},
            mapclick: function(e) {/*your listener*/},
            mapdblclick: function(e) {/*your listener*/},
            maplongpress: function(e) {/*your listener*/},
            maptrackingstart: function() {/*your listener*/},
            maptrackingend: function() {/*your listener*/},
            mapzoomchange: function(e) {/*your listener*/}
        }
    });

    document.getElementById("app_location").appendChild(map.root);

    $('#rnd').click(function () {
        $( "#popupAmazing" ).popup("open");

        setTimeout(function () {
            map.createPoi(
                    "blue-ball.png", {
                    longitude: 13.3896145,
                    latitude: 52.5166648,
                    name: "Nokia Office"
            });

            $( "#popupAmazing" ).popup( "close" )
        }, 1300);
    });

})();