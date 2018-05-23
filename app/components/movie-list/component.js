import Ember from 'ember';

export default Ember.Component.extend({
    classNames:['movie-list'],
    classNameBindings:['expand:movie-big'],

    expand: null,
    movies:null,

    model: null
});
