var Places = function(db) {
  var _self = this;
  this.places = ko.observableArray();
  db.child("places").on("value", function(snapshot) {
    console.log(snapshot.val());
    var collection = _.map(snapshot.val(), function(place_data){
      return new Place(place_data);
    });
    _self.places(collection);
  });
}
