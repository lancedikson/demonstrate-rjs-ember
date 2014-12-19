define(['ember', 'ember-data'], function(Ember, DS) {
    
    var Sun = Ember.Application.create({
        // LOG_TRANSITIONS: true,
        // LOG_ACTIVE_GENERATION: true,
        LOG_MODULE_RESOLVER: true,
        // LOG_VIEW_LOOKUPS: true,
        // isMain: false,
        applicationName: "SunSay",
        firstRun: true,
        // currentTrack: null
    });

    Sun.ApplicationStore = DS.Store.extend({
        adapter: DS.FixtureAdapter
    });
    
    return Sun;
});
