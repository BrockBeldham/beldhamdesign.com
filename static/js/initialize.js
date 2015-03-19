(function () {
    var global = this;

    var _        = global._;
    var $        = global.jQuery;
    var Backbone = global.Backbone;

    var Portfolio = (global.Portfolio || (global.Portfolio = { }));

    var Core = Portfolio.Core = function (options) {

        var defaults = {
            selectors: {
                homePage: '#home',
                workPage: '#work',
                aboutPage: '#about',
                contactPage: '#contact',
                navLink: '[data-nav-link]',
                container: ".container"
            },
            durations: {
                pageTransition: 700
            },
            routes: {
                home: 'home',
                work: 'work',
                about: 'about',
                contact: 'contact'
            }
        };

        this.config = $.extend(true, defaults, options || { });

        this._initialize();
    };

    Core.prototype._initialize = function () {
        console.log("%cYou didn't need to tear apart my website with dev tools...you could have just asked. The github repo is right here: %chttps://github.com/BrockBeldham/beldhamdesign.com", "color: #182232; font-family: 'Lato'; font-size: 18px;", "color: #3C76D4; font-style: bold; font-family: 'Lato'; font-size: 18px;");
        this._initNav();
        this._initRouter();
    };

    Core.prototype._initNav = function () {
        var $navLink = $(this.config.selectors.navLink);
        $navLink.on('click', function(event) {
            event.preventDefault();
            Backbone.history.navigate(event.target.pathname, {trigger: true});
        });
    };

    Core.prototype._initRouter = function () {
        var that = this;
        var selectors = this.config.selectors;
        var routes = this.config.routes;
        var MyRouter = Backbone.Router.extend({
            routes: {
                ''      : routes.home,
                'work'    : routes.work,
                'about'   : routes.about,
                'contact' : routes.contact
            },
        
            home: function() {
                that._openPage(selectors.homePage);
            },
        
            work: function() {
                that._openPage(selectors.workPage);
            },
        
            about: function() {
                that._openPage(selectors.aboutPage);
            },
        
            contact: function() {
                that._openPage(selectors.contactPage);
            }
        });

        new MyRouter();
        Backbone.history.start({ pushState: true });
    };

    Core.prototype._openPage = function (pageId) {
        var $container = $(this.config.selectors.container);
        var $pageId = $(pageId);
        var animationNum = this.getRandomNum(1, 5);
        if ($container.hasClass('active-page')) {
            switch (animationNum) {
                case 1:
                    this._pageTransitionFadeOut($pageId, $container);
                    this._pageTransitionTop($pageId, $container);
                    break;
                case 2:
                    this._pageTransitionFadeOut($pageId, $container);
                    this._pageTransitionRight($pageId, $container);
                    break;
                case 3:
                    this._pageTransitionFadeOut($pageId, $container);
                    this._pageTransitionBottom($pageId, $container);
                    break;
                case 4:
                    this._pageTransitionFadeOut($pageId, $container);
                    this._pageTransitionLeft($pageId, $container);
                    break;
            }
        } else {
            $pageId.addClass('active-page');
        }
    };

    Core.prototype._pageTransitionFadeOut = function () {
        var transitionDuration = this.config.durations.pageTransition;
        $('.active-page').velocity({
            opacity: 0.3
        },{
            duration: transitionDuration,
            easing: "easeOutSine",
            complete: function(element) {
                $(element).removeAttr('style');
            }
        });
    };

    Core.prototype._pageTransitionTop = function ($pageId, $container) {
        var that = this;
        var transitionDuration = this.config.durations.pageTransition;
        $pageId.css({
            top: '-100%',
            zIndex: '3',
            display: 'block'
        });
        $pageId.velocity({
            top: '0%'
        },{
            duration: transitionDuration,
            easing: 'easeOutSine',
            complete: function(element) {
                that._pageTransitionComplete(element, $container);
            }
        });
    };

    Core.prototype._pageTransitionRight = function ($pageId, $container) {
        var that = this;
        var transitionDuration = this.config.durations.pageTransition;
        $pageId.css({
            left: '-100%',
            zIndex: '3',
            display: 'block'
        });
        $pageId.velocity({
            left: '0%'
        },{
            duration: transitionDuration,
            easing: 'easeOutSine',
            complete: function(element) {
                that._pageTransitionComplete(element, $container);
            }
        });
    };

    Core.prototype._pageTransitionBottom = function ($pageId, $container) {
        var that = this;
        var transitionDuration = this.config.durations.pageTransition;
        $pageId.css({
            bottom: '-100%',
            zIndex: '3',
            display: 'block'
        });
        $pageId.velocity({
            bottom: '0%'
        },{
            duration: transitionDuration,
            easing: 'easeOutSine',
            complete: function(element) {
                that._pageTransitionComplete(element, $container);
            }
        });
    };

    Core.prototype._pageTransitionLeft = function ($pageId, $container) {
        var that = this;
        var transitionDuration = this.config.durations.pageTransition;
        $pageId.css({
            right: '-100%',
            zIndex: '3',
            display: 'block'
        });
        $pageId.velocity({
            right: '0%'
        },{
            duration: transitionDuration,
            easing: 'easeOutSine',
            complete: function(element) {
                that._pageTransitionComplete(element, $container);
            }
        });
    };

    Core.prototype._pageTransitionComplete = function (element, $container) {
        $(element).removeAttr('style');
        $container.removeClass('active-page');
        $(element).addClass('active-page');
    };

    Core.prototype.getRandomNum = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };

    // Auto instantiate
    $(function () {
        var $portolio = $('.portfolio');

        _($portolio).each(function () {
            new Core();
        });
    });

}).call(this);