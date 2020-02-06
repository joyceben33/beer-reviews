var BeerModel = Backbone.Model.extend({
    defaults: {
        id: null,
        name: '',
        style: '',
        abv: 0,
        image_url: ''
    }
});