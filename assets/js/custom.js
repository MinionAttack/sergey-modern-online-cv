// Google Maps
function showMap() {
    let map = new google.maps.Map(document.getElementById('map-container'), {
        zoom: 13,
        mapId: "Online_CV_Contact",
    });
    let geocoder = new google.maps.Geocoder;
    geocoder.geocode({'address': 'La Coruña'}, function (results, status) {
        if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            new google.maps.marker.AdvancedMarkerElement({
                map: map,
                position: results[0].geometry.location,
                title: 'A Coruña',
            });
        } else {
            window.alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
