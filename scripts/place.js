var Place = function(data){
  this.lat = ko.observable(data.lat);
  this.lon = ko.observable(data.lon);
  this.img = ko.observable(data.img);
  this.name = ko.observable(data.name);
  this.description = ko.observable(data.description);
  add_marker(this);

}
