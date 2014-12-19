define(['app/app', 'ember'], function(Sun, Ember){
    Sun.ApplicationController = Ember.Controller.extend({
        isPlaying: false,
        currentTrack: null,
        currentTime: null,
        videoPlaying: false,
        isMain: false
    });
});
