var BeerDetailView = Backbone.View.extend({
    className: 'reviews-container-inner',

    template: Handlebars.compile($('#beer-detail-template').html()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }
});