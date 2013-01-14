(function() {
    console.log('woa!');

    nokia.mh5.assetsPath = "http://api.maps.nokia.com/mobile/0.2.0/lib/";
    nokia.mh5.app.embed({
        domNode: "#app_location",
        appId: "_peU-uCkp-j8ovkzFGNU",
        appCode: "gBoUkAMoxoqIWfxWA5DuMQ",
        configuration: {
            map: {
            },
            search: null,
            details: null
        }
    });
})();