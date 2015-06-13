
var map;
function map_initialize() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      var lat = pos.coords.latitude;
      var lon = pos.coords.longitude;
      console.log("current pos: " + lat + "x" + lon)
      var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(lat, lon)
      };
      map = new google.maps.Map(
              document.getElementById('map-canvas'),
              mapOptions
            );

      google.maps.event.addListener(map, 'click', function(event) {
        set_cursor(event.latLng);
      });
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

var cursor;
var cursor_callback = function(a, f){
  console.log("Cursor at: " + a + "x" + f)
};

function set_cursor(location) {
  // prepare content info
  var content = "<div>to jest info " + Math.random() + "</div>";

  if((typeof cursor) === 'undefined'){
    // add cursor
    cursor = new google.maps.Marker({
      position: location,
      map: map
    });
  }else{
    // move cursor
    cursor.setPosition(location);
  }

  if((typeof cursor_callback) !== 'undefined'){
    cursor_callback(location.A, location.F);
  }
}
