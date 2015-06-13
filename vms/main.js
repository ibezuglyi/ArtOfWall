App = {};

(function(app){
  var viewModel = {};
  viewModel.name = ko.observable();
  App.main = viewModel;
  var messagesRef = new Firebase('https://glaring-heat-5949.firebaseio.com/');

  messagesRef.set({
    places:[

      {
        location:"",
        img:"",
        time:""
      }
    ]
});

  ko.applyBindings(app.main);
}(App));
