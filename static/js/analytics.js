(function () {
    var global = this;

    // namespacing
    var _         = global._;
    var $         = global.jQuery;

    // setting up vars to be used in core
    var AnalyticAttributes = Portfolio.AnalyticAttributes = function (options) {

        var defaults = {
            scope: 'body',
            event: {
                category: 'data-event-category',
                action: 'data-event-action',
                label: 'data-event-label'
            },
            namespace: 'AnalyticAttributes'
        };

        this.config = $.extend(true, defaults, options || { });

        this._initialize();
    };

    AnalyticAttributes.prototype._initialize = function () {
        var scope    = this.config.scope;
        var selector = '[' + this.config.event.category + ']';
        var event    = 'click.' + this.config.namespace;
        var handler  = _(this._handleEventClick).bind(this);

        $(scope)
            .find(selector)
            .off(event)
            .on(event, handler);
    };

    AnalyticAttributes.prototype._handleEventClick = function(event) {
        var $target     = $(event.currentTarget);
        var category    = $target.attr(this.config.event.category);
        var action      = $target.attr(this.config.event.action);
        var label       = $target.attr(this.config.event.label);

        ga('send', 'event', category, action, label);
    };

    // Auto instantiate
    $(function () {
        new AnalyticAttributes();
    });

    return AnalyticAttributes;

}).call(this);