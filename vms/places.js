var Places = function(db) {
  this.places = ko.observableArray();
  db.child("places").on("value", function(snapshot) {
    console.log(snapshot);
  });
}
