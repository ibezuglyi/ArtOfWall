var Place = function(data){
  this.lat = ko.observable(data.lat);
  this.lon = ko.observable(data.lon);
  this.img = ko.observable(data.img);
<<<<<<< HEAD
  add_marker(this);
=======
  this.name = ko.observable(data.name);
  this.description = ko.observable(data.description);


  if(typeof map !== "undefined"){
    map.add_marker(this);
  }
>>>>>>> 4f6277e0146ec0a2be93b32afc928fb2985efeef
}
