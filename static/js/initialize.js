(function () {
    var global = this;

    // namespacing
    var _        = global._;
    var $        = global.jQuery;
    var Backbone = global.Backbone;

    var Portfolio = (global.Portfolio || (global.Portfolio = { }));

    // setting up vars to be used in core
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
            },
            templates: {
                work: '#workTemplate'
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

    // preventing nav links default and using backbone instead
    Core.prototype._initNav = function () {
        var $navLink = $(this.config.selectors.navLink);
        $navLink.on('click', function(event) {
            event.preventDefault();
            Backbone.history.navigate(event.target.pathname, {trigger: true});
        });
    };

    // creating backbone routes
    Core.prototype._initRouter = function () {
        var that = this;
        var selectors = this.config.selectors;
        var routes = this.config.routes;
        var MyRouter = Backbone.Router.extend({
            routes: {
                ''            : routes.home,
                'work'        : routes.work,
                'work/:query' : routes.work,
                'about'       : routes.about,
                'contact'     : routes.contact
            },
        
            home: function() {
                that._openPage(selectors.homePage);
            },
        
            work: function(query) {
                that._initWork();
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

    // is the page load coming from within the site or external
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

    // leaving one page transitioning to dark grey screen
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

    // arriving at the destination page from dark grey to page
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

    // when transition is complete setup page classes for next page transition
    Core.prototype._pageTransitionComplete = function (element, $container) {
        $(element).removeAttr('style');
        $container.removeClass('active-page');
        $(element).addClass('active-page');
    };

    // initializing the work section by grabbing the json data for the content
    Core.prototype._initWork = function () {
        var that = this;
        $.getJSON("static/js/ajax/work.json").done(function(data) {
            that._bindWork(data);
        })
        .fail(function( jqxhr, textStatus, error ) {
            var err = jqxhr + ',' + textStatus + ", " + error;
            console.log(err);
        });
    };

    // binding click events to the info button on work items
    Core.prototype._bindWork = function (data) {
        var $pop = $(this.config.selectors.pop);
        var $popContent = $(this.config.selectors.popContent);

        var $workItem = $(this.config.selectors.work);
        var workOpenHandler = _(this._handleWorkOpen).bind(this, $pop, $popContent, data);
        $workItem.on('click', workOpenHandler);
    };

    // open up the work popup and insert content using underscore template
    Core.prototype._handleWorkOpen = function ($pop, $popContent, data, event) {
        event.preventDefault();

        var targetID = event.target.id.slice(-1);
        var $workTemplate = $(this.config.templates.work);
        var template = _.template($workTemplate.html());

        $popContent.html(template(data.work[targetID - 1]));
        this._bindWorkClose();
        $pop.addClass('pop-open');
    };

    // binding click events to the close button
    Core.prototype._bindWorkClose = function () {
        console.log('binding');
        var $popClose = $(this.config.selectors.popClose);
        var $pop = $(this.config.selectors.pop);

        var popCloseHandler = _(this._handlePopClose).bind(this, $pop);
        $popClose.on('click', popCloseHandler);
    };

    // close the work popup
    Core.prototype._handlePopClose = function ($pop, event) {
        console.log('handling');
        event.preventDefault();
        $pop.removeClass('pop-open');
    };

    // utility function for getting a random number between
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