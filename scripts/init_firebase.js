  $(document).ready(function(){
    var db = new Firebase("https://glaring-heat-5949.firebaseio.com/");
    ko.applyBindings(new Places(db));
  })