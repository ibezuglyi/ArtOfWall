var Place = function(data){
  this.lat = ko.observable(data.lat);
  this.lon = ko.observable(data.lon);
  this.img = ko.observable(data.img);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng( this.lon(), this.lat()),
    map: map,
    title: 'Hello World!'
  });

  var infowindow = new google.maps.InfoWindow({
    content: "<img src='" + this.img() + "' style='width: 50px; height: 50px;' />"
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });
}
