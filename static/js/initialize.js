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
                contactPage: '#contact'
            }
        };

        this.config         = $.extend(true, defaults, options || { });

        this._initialize();
    };

    Core.prototype._initialize = function () {
        this._initRouter();
    };

    Core.prototype._initRouter = function () {
        var that = this;
        var MyRouter = Backbone.Router.extend({
            routes: {
                ""        : "home",
                "work"    : "work",
                "contact" : "contact"
            },
        
            home: function() {
                that._openPage('#home');
            },
        
            work: function() {
                that._openPage('#work');
            },
        
            contact: function() {
                that._openPage('#contact');
            }
        });

        new MyRouter();
        Backbone.history.start({ pushState: true });
    };

    Core.prototype._openPage = function (pageId) {
        $(".container").hide();
        $(pageId).show();
    };

    // Auto instantiate
    $(function () {
        var $portolio = $('.portfolio');

        _($portolio).each(function () {
            new Core();
        });
    });

}).call(this);