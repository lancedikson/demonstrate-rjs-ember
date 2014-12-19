define([
    'ember', 
    'app/app', 
    'jquery',

    'controllers/application', 
    'views/application', 
    'views/home', 
    ], function(Ember, Sun, $){
    Sun.HomeRoute = Ember.Route.extend({
      activate: function() {
        this.controllerFor('application').set('isMain', false);
        $(document).attr('title', 'SunSay');
      }
    });
});
