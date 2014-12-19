define([
    'app/app',
    'ember',
    'jquery',
    'ember-animate',
    'views/page',
    ], function(Sun, Ember, $){
        
    Sun.HomeView = Sun.PageView.extend({
        willInsertElement: function() {
            this._super();
            
            // var twi = this.$().find('.twit__text');
                // firstLoad = true;

                // if (firstLoad) {
                    // $.ajax({
                    //     url: '/admin/twi',
                    //     method: "GET",
                    //     success: function(str) {
                    //         twi.text(str.text);
                    //         $('.js-twit-reply').attr('href', "https://twitter.com/intent/tweet?in_reply_to=" + str.id );
                    //         $('.js-twit-repost').attr('href', "https://twitter.com/intent/retweet?tweet_id=" + str.id);
                    //         $('.js-twit-favorite').attr('href', "https://twitter.com/intent/favorite?tweet_id=" + str.id );
                    //     },
                    //     error: function(str) {
                    //         $('.twit').hide();
                    //     }
                    // });
                    // firstLoad = false;
                // }
        },
        didInsertElement : function(){
            this._super();
            Ember.run.scheduleOnce('afterRender', this, function(){
                var self = this;
                if (Sun.firstRun) {
                    setTimeout(function(){
                        self.$().find('.twit').animate({
                            opacity: 1
                        }, 700);
                        self.$().find('.show-list-wrapper').animate({
                            opacity: 1
                        }, 700);
                        self.$().find('.player-row').animate({
                            opacity: 1
                        }, 700);
                        self.$().find('.soc-media').animate({
                            opacity: 1
                        }, 700);
                        self.$().find('.news-module').animate({
                            opacity: 1
                        }, 700);
                        self.$().find('.video-module').animate({
                            opacity: 1
                        }, 700);
                        self.$().find('.insta-module').animate({
                            opacity: 1
                        }, 700);
                    }, 1200);
                    Sun.firstRun = false;
                } else {
                    self.$().find('.twit').css({
                        opacity: 1
                    });
                    self.$().find('.show-list-wrapper').css({
                        opacity: 1
                    });
                    self.$().find('.player-row').css({
                        opacity: 1
                    }, 700);
                    self.$().find('.soc-media').css({
                        opacity: 1
                    }, 700);
                    self.$().find('.news-module').css({
                        opacity: 1
                    }, 700);
                    self.$().find('.video-module').css({
                        opacity: 1
                    }, 700);
                    self.$().find('.insta-module').css({
                        opacity: 1
                    }, 700);
                };

                $('.js-prev-shows').on('click', function(){
                    slider.goToPrevSlide()
                });
                $('.js-next-shows').on('click', function(){
                    slider.goToNextSlide()
                });
            });
        }
    });

});
