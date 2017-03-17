var app = app || {};

app.Contacts = Backbone.Collection.extend({
  url: '/contacts',
  model: app.Contact
});
