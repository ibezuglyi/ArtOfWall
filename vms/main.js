App = {};
(function(app){
  var viewModel = {};
  viewModel.name = ko.observable();
  app.main = viewModel;


  var messagesRef = new Firebase('https://artofwall.firebaseio.com');
  ko.applyBindings(app.main);
}(App));
