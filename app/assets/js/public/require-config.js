require.config({
  shim: {
    ember: {
      deps: [
        'handlebars',
        'jquery'
      ],
      exports: 'Ember'
    },
    'ember-data': {
      deps: [
        'ember'
      ],
      exports: 'DS'
    },
    'ember-animate': {
      deps: [
        'ember'
      ]
    },
    modernizr: {
      exports: 'Modernizr'
    },
    lightslider: {
      deps: [
        'jquery'
      ]
    },
    fancybox: {
      deps: [
        'jquery'
      ]
    }
  },
  paths: {
    app: '.',
    controllers: './controllers',
    components: '../components',
    models: './models',
    routes: './routes',
    templates: './templates',
    views: './views',
    PxLoader: '../../packages/PxLoader/PxLoader',
    ember: '../../packages/ember/ember',
    'ember-animate': '../../packages/ember-animate/ember-animate',
    'ember-data': '../../packages/ember-data/ember-data',
    foundation: '../../packages/foundation/js/foundation',
    jquery: '../../packages/jquery/dist/jquery',
    lightslider: '../../packages/lightslider/lightSlider/js/jquery.lightSlider.min',
    modernizr: '../../packages/modernizr/modernizr',
    requirejs: '../../packages/requirejs/require',
    'swfobject-amd': '../../packages/swfobject-amd/swfobject',
    handlebars: '../../packages/handlebars/handlebars',
    fancybox: '../../packages/fancybox/source/jquery.fancybox',
    rsvp: '../../packages/rsvp/rsvp'
  },
  packages: [

  ]
});
