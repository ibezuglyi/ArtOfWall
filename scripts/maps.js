var map;
function initialize() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      var lat = pos.coords.latitude;
      var lon = pos.coords.longitude;
      var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(lat, lon)
      };
      map = new google.maps.Map(
              document.getElementById('map-canvas'),
              mapOptions
            );
    });
  }
}

function add_marker(place){
  console.log("MAPS >> add marker: " + place.lon() + "x" + place.lat());
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng( place.lon(), place.lat()),
    map: map,
    title: "asd" //place.name()
  });

  var infowindow = new google.maps.InfoWindow({
    content: "<img src='" + place.img() + "' style='width: 50px; height: 50px;' />"
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });
}
