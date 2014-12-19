define(['app/app', 'routes/common'], function(Sun) {
    Sun.Router.reopen({
      location: 'history',
    });

    Sun.Router.map(function() {
        this.route('home', { path: '/' });
    });

});
