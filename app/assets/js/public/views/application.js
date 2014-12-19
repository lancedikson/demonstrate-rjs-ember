define([
    'app/app',
    'ember',
    'jquery',
    'ember-animate'], function(Sun, Ember, $){
    Sun.ApplicationView = Ember.View.extend({
        didInsertElement : function(){
          this._super();
          Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
        },

        willAnimateIn : function () {
            this.$().css("opacity", 0);
        },

        animateIn : function (done) {
            this.$().fadeTo(500, 1, done);
        },

        animateOut : function (done) {
            this.$().fadeTo(500, 0, done);
        },
        afterRenderEvent: function(){
            
        }
    });
});
