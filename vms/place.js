var Place = function(data){
  this.location = ko.observable(data.location);
  this.img = ko.observable(data.img);
}
