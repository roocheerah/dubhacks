function initialize() {
	var mapOptions = {
    	center: { lat: 47.6550, lng: -122.3080},
        zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
    	mapOptions);

    //Add listener
	google.maps.event.addListener(map, "click", function (event) {
    	var latitude = event.latLng.lat();
    	var longitude = event.latLng.lng();
    	var clickLatLong = new google.maps.LatLng(latitude,longitude);

    	console.log( latitude + ', ' + longitude );

    	var marker = new google.maps.Marker({
    		position: clickLatLong,
    		map: map,
    		title: "A new marker!"
    	})
	}); //end addListener
}

google.maps.event.addDomListener(window, 'load', initialize);