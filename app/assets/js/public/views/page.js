define([
    'app/app',
    'ember',
    'jquery',
    'ember-animate'], function(Sun, Ember, $){
        
    Sun.PageView = Ember.View.extend({
        didInsertElement : function(){
            this._super();
            Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
            Sun.page = this.get('renderedName');
        },
        afterRenderEvent : function(){
        },
        willAnimateIn : function () {
            this.$().css("opacity", 0);
            $('.js-content').css({
                height: 'auto'
            });
        },

        didAnimateOut: function() {
            $('.js-content').css({
                height: $('.js-content').height()
            });
        },

        animateIn : function (done) {
            this.$().fadeTo(500, 1, done);
        },

        animateOut : function (done) {
            this.$().fadeTo(500, 0, done);
        }
    });

});
