var Places = function(db) {
  this.db = db;
  var _self = this;
  this.newLon = ko.observable();
  this.newLat = ko.observable();
  this.newImg = ko.observable();
  this.newDescription = ko.observable();
  this.newName = ko.observable();
  this.places = ko.observableArray();

  this.onAddNewPlace = function() {
    db.child("places").push({
      lat:        _self.newLat() || 0,
      lon:        _self.newLon() || 0,
      name:       _self.newName()||"no name",
      description: _self.newDescription() || "description",
      img:        _self.newImg()||"",
      date:       new Date()

    });

    _self.newImg("");
    _self.newLat("");
    _self.newLon("");
    _self.newName("");
    _self.newDescription("");
    _self.newImg("");
  }

  db.child("places").on("value", function(snapshot) {
    var collection = _.map(snapshot.val(), function(place_data) {
      console.log(place_data);
      return new Place(place_data);
    });
    _self.places(collection);
  });
}
