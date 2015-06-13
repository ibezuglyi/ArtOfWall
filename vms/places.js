var Places = function(db) {
  this.db = db;
  var _self = this;
  this.newLocation = ko.observable();
  this.newImg = ko.observable();
  this.places = ko.observableArray();

  this.onAddNewPlace = function(){
    db.push({"places": {
      location: _self.newLocation(),
      img:_self.newImg()
    }});

    _self.newImg("");
    _self.newLocation("");
  }

  db.child("places").on("value", function(snapshot) {
    console.log(snapshot.val());
    var collection = _.map(snapshot.val(), function(place_data){
      console.log(place_data);
      return new Place(place_data);
    });
    _self.places(collection);
  });
}
