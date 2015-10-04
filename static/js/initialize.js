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
                workList: '.work-list',
                work: '[data-work-info]',
                popClose: '[data-pop-close]',
                pop: '.pop',
                popContent: '.pop-content'
            },
            durations: {
                pageTransition: 500
            },
            routes: {
                home: 'home',
                work: 'work',
                about: 'about',
                contact: 'contact'
            },
            templates: {
                work: '#workTemplate',
                workThumb: '#workThumbTemplate',
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
        var that = this,
            selectors = this.config.selectors,
            routes = this.config.routes;

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
        var $container = $(this.config.selectors.container),
            $pageId = $(pageId);

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
        var transitionDuration = this.config.durations.pageTransition,
            that = this,
            $header = $(this.config.selectors.header);

        $container.velocity({
            top: "100%"
        },{
            duration: transitionDuration,
            easing: "easeOutSine",
            complete: function(element) {
                that._pageTransitionOut($pageId, $container, $header, transitionDuration);
            }
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

    // load the work thuymbnails bind click events to them
    Core.prototype._bindWork = function (data) {
        var $workThumbTemplate = $(this.config.templates.workThumb),
            template = _.template($workThumbTemplate.html()),
            $workList = $(this.config.selectors.workList),
            contentArr = [];

        _.each(data.work, function(element, index) {
            element.index = index;
            contentArr.push(template(element))
        });

        $workList.html(contentArr);

        var $workItem = $(this.config.selectors.work),
            workOpenHandler = _(this._handleWorkOpen).bind(this, data);

        $workItem.on('click', workOpenHandler);
    };

    // open up the work popup and insert content using underscore template
    Core.prototype._handleWorkOpen = function (data, event) {
        event.preventDefault();

        var $pop = $(this.config.selectors.pop),
            $popContent = $(this.config.selectors.popContent),
            targetID = event.currentTarget.id.slice(-1),
            $workTemplate = $(this.config.templates.work),
            template = _.template($workTemplate.html()),
            scrollTopOffset = $pop.position().top;

        $("html").velocity("scroll", { offset: scrollTopOffset, mobileHA: false });

        $popContent.html(template(data.work[targetID]));
        this._bindWorkClose();
        $pop.addClass('pop-open');
        
        new Portfolio.AnalyticAttributes();
    };

    // binding click events to the close button
    Core.prototype._bindWorkClose = function () {
        var $popClose = $(this.config.selectors.popClose),
            $pop = $(this.config.selectors.pop);

        var popCloseHandler = _(this._handlePopClose).bind(this, $pop);
        $popClose.on('click', popCloseHandler);
    };

    // close the work popup
    Core.prototype._handlePopClose = function ($pop, event) {
        event.preventDefault();
        $pop.removeClass('pop-open');
    };

    // utility function for getting a random number between
    Core.prototype.getRandomNum = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };

    // Auto instantiate
    $(function () {
        new Core();
    });

    return Core;

}).call(this);