 // Google Maps
function showMap() {
    let map = new google.maps.Map(document.getElementById('map-container'), {zoom: 13});
    let geocoder = new google.maps.Geocoder;
    geocoder.geocode({'address': 'La Coruña'}, function (results, status) {
        if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            window.alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
