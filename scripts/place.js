var Place = function(data, map){
  this.lat = ko.observable(data.lat);
  this.lon = ko.observable(data.lon);
  this.img = ko.observable(data.img);
  if(typeof map !== "undefined"){
    map.add_marker(this);
  }
}
