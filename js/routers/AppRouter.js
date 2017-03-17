var app = app || {};

///ROUTER ////////////////////////////////////////////////////
// A mad combination of router and controller
// the router connects a hash URL (#like_this) to some particular method.
// The router keeps track of the state of the application
app.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    // 'projects': 'show',
    'contact' : 'show'
  },
  index: function() {
    var appView = new app.AppView();
    appView.render();
  },
  // show: function() {
  //   var post = app.posts.get(id);
  //   var postView = new app.PostView({model: post});
  //   postView.render();
  // }
});


index: function() {
  var appView = new app.AppView();
  appView.render();
  var reservationsView = new app.ReservationsView();
  reservationsView.render();


},
show: function (id) {
  var flight = app.flights.get(id);
  var flightView = new app.FlightView({model: flight});
  flightView.render();



}


$(document).ready(function(){
  //we define the router instance as a global variable so we can use it
  //in some of our views.
  app.router = new app.Router();

  //kicks off the BB routing and enables the browser back and forward
  //buttons
  Backbone.history.start();


});
