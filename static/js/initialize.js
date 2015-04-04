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
                container: '.container',
                header: '.hdr',
                work: '[data-work-info]',
                popClose: '[data-pop-close]',
                pop: '.pop',
                popBg: '.pop-bg',
                popTile: '.pop-bg-tile',
                popContent: '.pop-content'
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
        this._initWork();
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
        if ($container.hasClass('active-page')) {
            // internal link
            this._pageTransitionIn($pageId, $container);
        } else {
            // external link
            $pageId.addClass('active-page');
        }
    };

    Core.prototype._pageTransitionIn = function ($pageId, $container) {
        var transitionDuration = this.config.durations.pageTransition;
        var that = this
        var $header = $(this.config.selectors.header);

        $container.velocity({
            top: "100%"
        },{
            duration: transitionDuration,
            easing: "easeOutSine",
            complete: function(element) {
                setTimeout(function(){
                    that._pageTransitionOut($pageId, $container, $header, transitionDuration);
                }, transitionDuration);
            }
        });

        $header.velocity({
            top: "-150px"
        },{
            duration: transitionDuration,
            easing: "easeOutSine"
        });
    };

    Core.prototype._pageTransitionOut = function ($pageId, $container, $header, transitionDuration) {
        var that = this;

        $pageId.css({
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

        $header.velocity({
            top: "0"
        },{
            duration: transitionDuration,
            easing: "easeOutSine"
        });
    };

    Core.prototype._pageTransitionComplete = function (element, $container) {
        $(element).removeAttr('style');
        $container.removeClass('active-page');
        $(element).addClass('active-page');
    };

    Core.prototype._initWork = function () {
        $popTile = $(this.config.selectors.popTile);
        $pop = $(this.config.selectors.pop);
        $popContent = $(this.config.selectors.popContent);
        $popBg = $(this.config.selectors.popBg);

        for(var i=1; i<=100; i++) {
            var div = document.createElement("div");
            div.className = 'pop-bg-tile';
            $popBg.append(div);
        }

        var $workItem = $(this.config.selectors.work);
        var workOpenHandler = _(this._handleWorkOpen).bind(this, $pop, $popTile, $popContent);
        $workItem.on('click', workOpenHandler);

        var $popClose = $(this.config.selectors.popClose);
        var popCloseHandler = _(this._handlePopClose).bind(this, $pop, $popTile);
        $popClose.on('click', popCloseHandler);
    };

    Core.prototype._handleWorkOpen = function ($pop, $popTile, $popContent, event) {
        event.preventDefault();

        $popContent.html('');
        $pop.addClass('pop-open');
    };

    Core.prototype._handlePopClose = function ($pop, $popTile, event) {
        event.preventDefault();
        $pop.removeClass('pop-open');
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