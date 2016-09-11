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
                category : 'data-event-category',
                action   : 'data-event-action',
                label    : 'data-event-label'
            },
            namespace : 'AnalyticAttributes'
        };

        this.config = _.extend(defaults, options || { });

        this._initialize();
    };

    AnalyticAttributes.prototype._initialize = function () {
        var scope    = document.querySelector(this.config.scope),
            selector = '[' + this.config.event.category + ']',
            event    = 'click.' + this.config.namespace,
            handler  = _.bind(this._handleEventClick, this);

        $(scope)
            .find(selector)
            .off(event)
            .on(event, handler);
    };

    AnalyticAttributes.prototype._handleEventClick = function(event) {
        var $target = $(event.currentTarget),
            category = $target.attr(this.config.event.category),
            action = $target.attr(this.config.event.action),
            label = $target.attr(this.config.event.label);

        ga('send', 'event', category, action, label);
    };

    // Auto instantiate
    $(function () {
        new AnalyticAttributes();
    });

    return AnalyticAttributes;

}).call(this);