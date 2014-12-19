define(['app/app', 'ember'], function(Sun, Ember){
    // Menu items
    Sun.LinkLiComponent = Ember.Component.extend({
      tagName: 'li',
      classNames: ['main-menu__item'],
      classNameBindings: ['active:main-menu__item--active'],
      active: function() {
        return this.get('childViews').anyBy('active');
      }.property('childViews.@each.active')
    });

    Sun.AfishaLinkLiComponent = Sun.LinkLiComponent.extend({
        isMain: false,
        classNameBindings: ['active:main-menu__item--active', 'isMain::main-menu__item--afisha-main']
    });
  
});
