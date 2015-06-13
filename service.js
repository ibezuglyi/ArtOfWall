var DB = function(){
  var _self = this;
  this.firebase = new Firebase("https://glaring-heat-5949.firebaseio.com/");
  this.AddPlace = function(place){
    _self.firebase.child("place").push(place);
  };
  this.FindPlace = function(){

  };


}
