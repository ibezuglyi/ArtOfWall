var Places = function(db) {
  this.db = db;
  var _self = this;
  this.newLon = ko.observable();
  this.newLat = ko.observable();
  this.newImg = ko.observable();
  this.places = ko.observableArray();

  db.child("places").on("value", function(snapshot) {
    var collection = _.map(snapshot.val(), function(place_data){
      console.log(place_data);
      return new Place(place_data);
    });
    _self.places(collection);
  });
}
