define([
    'ember', 
    'app/app', 
    'jquery',
    'controllers/application', 
    'views/application',
    ], function(Ember, Sun, $){
    Sun.ApplicationRoute = Ember.Route.extend({
      activate: function() {
        $('.loader').remove();
        $('<script type="text/javascript" async src="//platform.twitter.com/widgets.js"></script>').appendTo('head');
      },
      setupController: function(controller, model) {
        this._super();
      }
    });
});
